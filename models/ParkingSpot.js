const { model, Schema } = require('mongoose');

const parkingSpotSchema = new Schema({
    number: Number,
    isOccupied: Boolean,
    unUsable: Boolean,
    createdAt: Date,
    occupiedAt: Date,
    releasedAt: Date,
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

// eslint-disable-next-line func-names
parkingSpotSchema.statics.releaseAllSlots = async function(cb) {
    console.log('releasing');
    const spots = await this.model('ParkingSpot').updateMany(
        {},
        {
            user: null,
            car: null,
            isOccupied: false,
            occupiedAt: null
        }
    );
    if (cb) cb(spots);
};

const ParkingSpot = model('ParkingSpot', parkingSpotSchema);

module.exports = ParkingSpot;
