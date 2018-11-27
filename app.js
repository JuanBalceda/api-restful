const express = require('express');
const config = require('./config');
const app = express();
const router = require('./router');

app
    .set('port', process.env.PORT)
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use('/api', router);

module.exports = app;

