require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_CONNECTION}/${process.env.DB_NAME}` );  //  || 'mongodb://localhost:27017/miuprojobs'
mongoose.Promise = global.Promise;

module.exports = mongoose;
