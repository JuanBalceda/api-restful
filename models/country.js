const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CountrySchema = new Schema({
    code: {
        type: String,
        require: [true, 'Country code is required'],
        unique: true
    },
    name: {
        type: String,
        require: [true, 'Country name is required'],
        unique: true
    }
});

module.exports = mongoose.model('Country', CountrySchema);