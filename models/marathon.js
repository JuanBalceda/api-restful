const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MarathonSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        require: [true, 'Country is required']
    },
    location: {
        type: String,
        require: [true, 'Location is required']
    },
    altitude: Number,
    web: {
        type: String,
        lowercase: true
    },
    logo: String,
    since: String,
    day: String,
    date: Date,
    type: {
        type: String,
        enum: ['City', 'Trail'],
        default: 'City'
    },
    distance: {
        type: Number,
        min: 42.195,
        default: 42.195
    },
    description: String
});

module.exports = mongoose.model('Marathon', MarathonSchema);