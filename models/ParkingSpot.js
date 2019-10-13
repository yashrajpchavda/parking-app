const { model, Schema } = require('mongoose');

const parkingSpotSchema = new Schema({
    number: Number,
    isOccupied: Boolean,
    createdAt: Date,
    occupiedAt: Date,
    releasedAt: Date,
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

const ParkingSpot = model('ParkingSpot', parkingSpotSchema);

module.exports = ParkingSpot;
