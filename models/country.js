const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CountrySchema = new Schema({
    code: {
        type: String,
        require: [true, 'Country code is required']
    },
    name: {
        type: String,
        require: [true, 'Country name is required']
    }
});

module.exports = mongoose.model('Country', CountrySchema);