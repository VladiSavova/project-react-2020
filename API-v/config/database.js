const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, {
        useCreateIndex: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true });
};