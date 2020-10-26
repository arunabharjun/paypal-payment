require('dotenv').config();

exports.ENV = process.env.NODE_ENV || 'DEVELOPMENT';
exports.PORT = process.env.PORT || 8000;
exports.DATABASE = process.env.DATABASE;
exports.CLIENT_ID = process.env.PayPal_CLIENT_ID;
exports.SECRET = process.env.PayPal_SECRET;
exports.ACCESS_TOKEN = process.env.PayPal_ACCESS_TOKEN;
exports.API = process.env.PayPal_API;
exports.API_VERSION = process.env.PayPal_API_VERSION;
exports.CATELOGS_ENDPOINT = process.env.PayPal_CATELOGS_ENDPOINT;
