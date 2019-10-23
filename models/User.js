const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    displayName: String,
    password: String,
    email: String,
    isAdmin: Boolean,
    mobile: String,
    createdAt: Date,
    updatedAt: Date,
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        }
    ],
    parkingSpot: { type: Schema.Types.ObjectId, ref: 'ParkingSpot' }
});

const User = model('User', userSchema);

module.exports = User;
