const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    displayName: String,
    password: String,
    email: String,
    isAdmin: Boolean,
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
