const { model, Schema } = require('mongoose');

const ParkingSpot = require('./ParkingSpot');

const loginSchema = new Schema({
    loginDate: Date
});

// eslint-disable-next-line func-names
loginSchema.statics.handleFirstLogin = async function() {
    const logins = await this.model('Login').find();

    if (!logins || logins.length === 0) {
        return ParkingSpot.releaseAllSlots().then(spotsData => {
            console.log('first login updated slots', spotsData);
            const date = new Date();
            date.setHours(1, 0, 0, 0);

            const login = new this({
                loginDate: date
            });

            return login.save();
        });
    }
    const existingLogin = logins[0];
    const currentDate = new Date();
    currentDate.setHours(1, 0, 0, 0);

    if (existingLogin.loginDate < currentDate) {
        return ParkingSpot.releaseAllSlots().then(spotsData => {
            console.log('first login updated slots', spotsData);

            const date = new Date();
            date.setHours(1, 0, 0, 0);
            existingLogin.loginDate = date;

            return existingLogin.save();
        });
    }

    return null;
};

const Login = model('Login', loginSchema);

module.exports = Login;
