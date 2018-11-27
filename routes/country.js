const country = require('../models/country');
const fs = require('fs');

const postCountries = async (req, res) => {
    const countries = JSON.parse(fs.readFileSync('./models/countries.json', 'utf-8'));
    await country.insertMany(countries, (err, data) => {
        if (err) {
            res.status(500).send({
                message: `Server error: ${err.message}`
            });
        } else {
            res.status(200).send({ data });
        }
    });
};

const getCountries = async (req, res) => {
    await country.find({}).exec((err,data) => {
        if (err) {
            res.status(500).send({
                message: `Server error: ${err.message}`
            });
        } else {
            if (data) {
                res.status(200).send({ data });
            }else{
                res.status(404).send({
                    message: `There are no countries loaded.`
                });
            }
        }
    });
};

module.exports = {
    postCountries,
    getCountries
};