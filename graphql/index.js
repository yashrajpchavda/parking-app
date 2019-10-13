const { UserInputError, gql } = require('apollo-server-express');

const ParkingSpot = require('../models/ParkingSpot');

const typeDefs = gql`
    type ParkingSpot {
        id: ID!
        number: Int!
        isOccupied: Boolean!
        createdAt: String!
        occupiedAt: String
        releasedAt: String
    }
    type Query {
        sayHi: String!
        getParkingSpots: [ParkingSpot]!
    }

    input ParkingSpotInput {
        number: Int!
    }

    type Mutation {
        createParkingSpot(parkingSpot: ParkingSpotInput): ParkingSpot!
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
        }
    }
};

module.exports = { resolvers, typeDefs };
