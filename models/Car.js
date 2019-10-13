const { model, Schema } = require('mongoose');

const carSchema = new Schema({
    name: String,
    plate: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    parkingSpot: {
        type: Schema.Types.ObjectId,
        ref: 'ParkingSpot'
    }
});

const Car = model('Car', carSchema);

module.exports = Car;
