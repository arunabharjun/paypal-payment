/**
 * Imports
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, ENV, DATABASE } = require('./config');

/**
 * App
 */
const app = express();

/**
 * Environment
 */
const port = PORT;
const env = ENV;
const db = DATABASE;

/**
 * Database
 */
const dbcon = (db_env) => {
	mongoose
		.connect(db_env, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('[API] : Database Connected'));
};
dbcon(db);

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

/**
 * CORS
 */
if (env === 'DEVELOPMENT') {
	app.use(cors());
}

/**
 * Routes
 */
const apiRoutes = require('./routes/api');

/**
 * Route middlewares
 */
app.use('/api', apiRoutes);

/**
 * App Listen
 */
app.use(function(req, res) {
	res.status(404).json({ error: '404 : Page not found' });
});
app.listen(port, () => {
	console.log(
		`[API] : Server running on port ${port} | ENVIRONMENT : ${env}`
	);
});
