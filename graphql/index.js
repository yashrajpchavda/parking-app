const { UserInputError, gql } = require('apollo-server-express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    validateAddUserInput,
    validateLoginInput,
    validateOccupyParkingSpotInput,
    validateReleaseParkingSpotInput,
    validateCreateCarInput,
    validateAssignCarInput
} = require('./../util/validators');

const { checkAuth, checkAdminAuth } = require('./../util/checkAuth');
const ParkingSpot = require('../models/ParkingSpot');
const User = require('../models/User');
const Car = require('../models/Car');
const Login = require('../models/Login');

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
            displayName: user.displayName
        },
        process.env.JWT_SECRET_KEY || 'very secret key',
        { expiresIn: '365d' }
    );
}

const typeDefs = gql`
    type ParkingSpot {
        id: ID!
        number: Float!
        isOccupied: Boolean!
        unUsable: Boolean
        createdAt: String!
        occupiedAt: String
        releasedAt: String
        user: User
        car: Car
    }

    type User {
        id: ID!
        displayName: String!
        email: String!
        mobile: String!
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
        number: Float!
        unUsable: Boolean
    }

    input AddUserInput {
        email: String!
        displayName: String!
        password: String!
        confirmPassword: String!
        mobile: String!
        cars: [String]
    }

    input ToggleParkingSpotInput {
        spotId: ID!
        userId: ID
        carId: ID
    }

    input CarInput {
        name: String!
        plate: String!
    }

    input AssignCarInput {
        userId: ID!
        carId: ID!
    }

    type Query {
        getParkingSpots: [ParkingSpot]!
        getAllUsers: [User]!
        getAllCars: [Car]!
    }

    type Mutation {
        createParkingSpot(parkingSpot: ParkingSpotInput!): ParkingSpot!
        addUser(addUserInput: AddUserInput): User!
        login(email: String!, password: String!): User!
        occupyParkingSpot(toggleInput: ToggleParkingSpotInput!): ParkingSpot!
        releaseParkingSpot(toggleInput: ToggleParkingSpotInput!): ParkingSpot!
        createCar(carInput: CarInput!): Car!
        assignCarToUser(assignCar: AssignCarInput!): User!
        unAssignCarFromUser(unAssignCar: AssignCarInput): User!
    }
`;

const resolvers = {
    Query: {
        getParkingSpots: async (_, args, context) => {
            checkAuth(context);

            await Login.handleFirstRequestOfDay();

            return ParkingSpot.find()
                .sort('number')
                .populate('user')
                .populate('car');
        },
        getAllUsers: (_, args, context) => {
            checkAuth(context);
            return User.find({ isAdmin: { $ne: true } })
                .sort('displayName')
                .populate('cars');
        },
        getAllCars: () => Car.find()
    },

    Mutation: {
        createParkingSpot: async (
            _,
            { parkingSpot: { number, unUsable = false } },
            context
        ) => {
            checkAdminAuth(context);

            try {
                if (!number || number < 1) {
                    throw new UserInputError('Invalid parking spot number');
                }

                const spot = new ParkingSpot({
                    number,
                    createdAt: new Date(),
                    isOccupied: false,
                    unUsable
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
                    displayName,
                    password,
                    mobile,
                    confirmPassword,
                    email,
                    cars
                }
            },
            context
        ) => {
            checkAdminAuth(context);
            const { valid, errors } = validateAddUserInput({
                displayName,
                email,
                mobile,
                password,
                confirmPassword
            });

            // eslint-disable-next-line no-param-reassign
            cars = cars || [];

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                throw new UserInputError('User with the email already exists', {
                    errors: {
                        email: 'The user with the email already exists'
                    }
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                displayName,
                password: hashedPassword,
                isAdmin: false,
                cars,
                mobile,
                createdAt: new Date()
            });

            await newUser.save();

            return User.findById(newUser.id).populate('cars');
        },

        login: async (_, { email, password }) => {
            const { errors, valid } = validateLoginInput(email, password);

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const user = await User.findOne({ email });

            if (!user) {
                errors.operation = 'User not found';
                throw new UserInputError('User not found', { errors });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                errors.operation = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', { errors });
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

        occupyParkingSpot: async (_, { toggleInput }, context) => {
            checkAuth(context);

            const { spotId, carId, userId } = toggleInput;
            const { valid, errors } = validateOccupyParkingSpotInput(
                toggleInput
            );

            if (!valid) {
                throw new UserInputError('Wrong user input', { errors });
            }

            try {
                // check if the same car is already parked at some other spot
                const spotOfCar = await ParkingSpot.findOne({ car: carId });

                if (spotOfCar) {
                    throw new UserInputError(
                        'Car is already parked at another spot',
                        {
                            errors: {
                                operation:
                                    'Car is already parked at another spot'
                            }
                        }
                    );
                }

                const parkingSpot = await ParkingSpot.findById(spotId);

                if (parkingSpot) {
                    if (parkingSpot.isOccupied) {
                        throw new UserInputError(
                            'Parking spot is already occupied'
                        );
                    }

                    if (parkingSpot.unUsable) {
                        throw new UserInputError('Parking spot is not usable');
                    }

                    parkingSpot.user = userId;
                    parkingSpot.car = carId;
                    parkingSpot.isOccupied = true;
                    parkingSpot.occupiedAt = new Date();
                } else {
                    throw new UserInputError('Parking spot not found');
                }

                await parkingSpot.save();

                return ParkingSpot.findById(spotId)
                    .populate('user')
                    .populate('car');
            } catch (err) {
                if (err instanceof UserInputError) {
                    throw new UserInputError(err, { errors: err.errors });
                } else {
                    throw new Error(err);
                }
            }
        },

        releaseParkingSpot: async (_, { toggleInput }, context) => {
            checkAuth(context);

            const { spotId } = toggleInput;
            const { valid, errors } = validateReleaseParkingSpotInput(
                toggleInput
            );

            if (!valid) {
                throw new UserInputError('Wrong user input', { errors });
            }

            try {
                const parkingSpot = await ParkingSpot.findById(spotId);

                if (parkingSpot) {
                    if (parkingSpot.unUsable) {
                        throw new Error('Parking spot is not usable');
                    }

                    parkingSpot.user = null;
                    parkingSpot.car = null;
                    parkingSpot.isOccupied = false;
                    parkingSpot.occupiedAt = null;
                } else {
                    throw new Error('Parking spot not found');
                }

                await parkingSpot.save();

                return ParkingSpot.findById(spotId)
                    .populate('user')
                    .populate('car');
            } catch (err) {
                throw new Error(err);
            }
        },

        createCar: (_, { carInput }, context) => {
            checkAdminAuth(context);

            const { name, plate } = carInput;
            const { valid, errors } = validateCreateCarInput(carInput);

            if (!valid) {
                throw new UserInputError('Wrong input', { errors });
            }

            try {
                const car = new Car({
                    name,
                    plate
                });

                return car.save();
            } catch (err) {
                throw new Error(err);
            }
        },

        assignCarToUser: async (_, { assignCar }) => {
            const { userId, carId } = assignCar;

            const { valid, errors } = validateAssignCarInput(assignCar);

            if (!valid) {
                throw new UserInputError('Invalid input', { errors });
            }

            try {
                const user = await User.findById(userId);
                const car = await Car.findById(carId);

                if (!user) {
                    throw new UserInputError('User not found');
                }

                if (!car) {
                    throw new UserInputError('Car not found');
                }

                // check if car is already assigned to user
                const index = user.cars.indexOf(carId);

                if (index !== -1) {
                    throw new UserInputError('Car already assigned to user');
                }

                user.cars.push(car);

                await user.save();

                return User.findById(userId).populate('cars');
            } catch (err) {
                throw new Error(err);
            }
        },

        unAssignCarFromUser: async (_, { unAssignCar }) => {
            const { userId, carId } = unAssignCar;

            const { valid, errors } = validateAssignCarInput(unAssignCar);

            if (!valid) {
                throw new UserInputError('Invalid input', { errors });
            }

            try {
                const user = await User.findById(userId);

                if (!user) {
                    throw new UserInputError('User not found');
                }

                // find index
                const index = user.cars.indexOf(carId);
                if (index === -1) {
                    throw new Error('Car not assigned to user');
                }

                user.cars.splice(index, 1);

                await user.save();

                return User.findById(userId).populate('cars');
            } catch (err) {
                throw new Error(err);
            }
        }
    }
};

module.exports = { resolvers, typeDefs };
