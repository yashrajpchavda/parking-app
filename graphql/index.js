const { UserInputError, gql } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    validateAddUserInput,
    validateLoginInput
} = require('./../util/validators');
const checkAuth = require('./../util/checkAuth');
const ParkingSpot = require('../models/ParkingSpot');
const User = require('../models/User');
const Car = require('../models/Car');

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
            isAdmin: user.isAdmin
        },
        process.env.SECRET_KEY || 'very secret key',
        { expiresIn: '1h' }
    );
}

const typeDefs = gql`
    type ParkingSpot {
        id: ID!
        number: Int!
        isOccupied: Boolean!
        createdAt: String!
        occupiedAt: String
        releasedAt: String
        user: User
        car: Car
    }

    type User {
        id: ID!
        username: String!
        displayName: String!
        email: String!
        cars: [Car]
        isAdmin: Boolean
        createdAt: String
        token: String
    }

    type Car {
        id: ID!
        name: String!
        plate: String!
    }

    input ParkingSpotInput {
        number: Int!
    }

    input AddUserInput {
        username: String!
        displayName: String!
        password: String!
        confirmPassword: String!
        email: String!
        cars: [String]
    }

    input OccupyParkingSpotInput {
        spotId: ID!
        userId: ID!
        carId: ID!
    }

    input CarInput {
        name: String!
        plate: String!
    }

    type Query {
        sayHi: String!
        getParkingSpots: [ParkingSpot]!
        getAllUsers: [User]!
        getAllCars: [Car]!
    }

    type Mutation {
        createParkingSpot(parkingSpot: ParkingSpotInput!): ParkingSpot!
        addUser(addUserInput: AddUserInput): User!
        login(username: String!, password: String!): User!
        occupyParkingSpot(occupyInput: OccupyParkingSpotInput!): ParkingSpot!
        createCar(carInput: CarInput!): Car!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello Rupam!!!',
        getParkingSpots: async () => {
            const spots = await ParkingSpot.find()
                .populate('user')
                .populate('car');
            return spots;
        },
        getAllUsers: async () => User.find().populate('cars'),
        getAllCars: () => Car.find()
    },

    Mutation: {
        createParkingSpot: async (_, { parkingSpot: { number } }, context) => {
            checkAuth(context);

            try {
                if (!number || number < 1) {
                    throw new UserInputError('Invalid parking spot number');
                }

                const existingSpot = await ParkingSpot.findOne({ number });

                if (existingSpot) {
                    throw new UserInputError('Parking spot already exists');
                }

                const spot = new ParkingSpot({
                    number,
                    createdAt: new Date(),
                    isOccupied: false
                });

                return spot.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        addUser: async (
            _,
            {
                addUserInput: {
                    username,
                    displayName,
                    password,
                    confirmPassword,
                    email,
                    cars
                }
            }
        ) => {
            const { valid, errors } = validateAddUserInput(
                username,
                displayName,
                email,
                password,
                confirmPassword
            );

            // eslint-disable-next-line no-param-reassign
            cars = cars || [];

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const existingUser = await User.findOne({ username });

            if (existingUser) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                displayName,
                password: hashedPassword,
                isAdmin: false,
                cars,
                createdAt: new Date()
            });

            await newUser.save();

            return User.findById(newUser.id).populate('cars');
        },

        login: async (_, { username, password }) => {
            const { errors, valid } = validateLoginInput(username, password);

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const user = await User.findOne({ username });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', errors);
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                errors.general = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', errors);
            }

            const token = generateToken(user);

            return {
                // eslint-disable-next-line no-underscore-dangle
                ...user._doc,
                // eslint-disable-next-line no-underscore-dangle
                id: user._id,
                token
            };
        },

        occupyParkingSpot: async (
            _,
            { occupyInput: { spotId, carId, userId } }
        ) => {
            // TODO: find the spot by number and update the car and user id
            const parkingSpot = await ParkingSpot.findById(spotId);

            if (parkingSpot) {
                parkingSpot.user = userId;
                parkingSpot.car = carId;
                parkingSpot.isOccupied = true;
                parkingSpot.occupiedAt = new Date();
            }

            await parkingSpot.save();

            return ParkingSpot.findById(spotId)
                .populate('user')
                .populate('car');
        },

        createCar: (_, { carInput: { name, plate } }) => {
            // TODO: Validate user input
            const car = new Car({
                name,
                plate
            });

            return car.save();
        }
    }
};

module.exports = { resolvers, typeDefs };
