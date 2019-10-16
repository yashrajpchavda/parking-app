const { model, Schema } = require('mongoose');

const carSchema = new Schema({
    name: String,
    plate: String
});

const Car = model('Car', carSchema);

module.exports = Car;
