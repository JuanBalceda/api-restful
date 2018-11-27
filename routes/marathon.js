const marathon = require('../models/marathon');
const c = console.log;

const apiResponse = (req, res, err, data) => {
    if (err) {
        res.status(500).send({
            message: `Server error: ${err.message}`
        });
    } else {
        if (data) {
            res.status(200).send({ data });
        } else {
            res.status(404).send({
                message: `There is no data loaded.`
            });
        }
    }
};

const getMarathons = async (req, res) => {
    await marathon
        .find({})
        .sort({ '_id': -1 })
        .exec((err, data) => apiResponse(req, res, err, data))
}

const getMarathon = async (req, res) => {
    await marathon
        .findById(req.params.id)
        .exec((err, data) => apiResponse(req, res, err, data))
}

const putMarathon = async (req, res) => {
    await marathon
        .findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, data) => apiResponse(req, res, err, data))
}

const postMarathon = async (req, res) => {
    let marathon = new marathon(req.body);
    c(req.body);
    await marathon.save((err, data) => apiResponse(req, res, err, data));
}

const deleteMarathon = async (req, res) => {
    await marathon
        .findByIdAndRemove(
            req.params.id,
            req.body,
            (err, data) => apiResponse(req, res, err, data))
}
module.exports = {
    getMarathons,
    getMarathon,
    postMarathon,
    putMarathon,
    deleteMarathon
};