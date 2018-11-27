const express = require('express');
const marathon = require('./routes/marathon');
const country = require('./routes/country');
const api = express.Router();

api.get('/', async (req, res) => {
    await res.status(200).send({
        message: 'Marathons RESTful API working OK'
    })
});

api.post('/countries', country.postCountries);
api.get('/countries', country.getCountries);

api.post('/marathon', marathon.getMarathon);
api.get('/marathons', marathon.getMarathons);
api.get('/marathon/:id', marathon.getMarathon);
api.put('/marathon/:id', marathon.putMarathon);
api.delete('/marathon/:id', marathon.getMarathon);

module.exports = api