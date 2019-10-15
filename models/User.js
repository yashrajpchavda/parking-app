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
    ]
});

const User = model('User', userSchema);

module.exports = User;
