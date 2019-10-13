const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
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
