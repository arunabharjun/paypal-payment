require('dotenv').config();
exports.ENV = process.env.NODE_ENV || 'DEVELOPMENT';
exports.PORT = process.env.PORT || 8000;
exports.DATABASE = process.env.DATABASE;
