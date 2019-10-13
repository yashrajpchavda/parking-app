const { UserInputError, gql } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validateAddUserInput } = require('./../util/validators');
const ParkingSpot = require('../models/ParkingSpot');
const User = require('../models/User');

const typeDefs = gql`
    type ParkingSpot {
        id: ID!
        number: Int!
        isOccupied: Boolean!
        createdAt: String!
        occupiedAt: String
        releasedAt: String
    }

    type User {
        id: ID!
        username: String!
        email: String!
        createdAt: String!
        token: String!
    }

    type Query {
        sayHi: String!
        getParkingSpots: [ParkingSpot]!
    }

    input ParkingSpotInput {
        number: Int!
    }

    input AddUserInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    type Mutation {
        createParkingSpot(parkingSpot: ParkingSpotInput): ParkingSpot!
        addUser(addUserInput: AddUserInput): User!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello Rupam!!!',
        getParkingSpots: () => ParkingSpot.find()
    },

    Mutation: {
        createParkingSpot: async (_, { parkingSpot: { number } }) => {
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
            { addUserInput: { username, password, confirmPassword, email } }
        ) => {
            const { valid, errors } = validateAddUserInput(
                username,
                email,
                password,
                confirmPassword
            );

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
                password: hashedPassword,
                createdAt: new Date()
            });

            const res = await newUser.save();

            const token = jwt.sign(
                {
                    id: res.id,
                    email: res.email,
                    username: res.username
                },
                process.env.SECRET_KEY || 'very secret key',
                { expiresIn: '1h' }
            );

            return {
                // eslint-disable-next-line no-underscore-dangle
                ...res._doc,
                // eslint-disable-next-line no-underscore-dangle
                id: res._id,
                token
            };
        }
    }
};

module.exports = { resolvers, typeDefs };
