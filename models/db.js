const c = console.log;
const mongoose = require('mongoose');
const config = require('../config');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(process.env.URL_DB, { useNewUrlParser: true })
            .then(() => c(`Successful database connection: ${process.env.URL_DB}`))
            .catch(err => c(`Error trying to connect database: ${err.message}`));
    }
}

module.exports = new Database();