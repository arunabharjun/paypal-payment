/**
 * Imports
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const ejs = require('ejs');
require('express-async-errors');
const { PORT, ENV, DATABASE } = require('./config');
const { connectToDataBase } = require('./helpers/db');

/**
 * App
 */
const app = express();
app.set('view engine', 'ejs');

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * CORS
 */
if (ENV === 'DEVELOPMENT') {
	app.use(cors());
}

/**
 * Routes
 */
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

/**
 * Route middlewares
 */
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

/**
 * Handling undefined route
 * (always to be kept at the end of all routes)
 */
app.use((req, res) => {
	res.status(404).json({ error: '404 : Route not found' });
});

/**
 * Start the app
 */
const start = async () => {
	try {
		/**
         * Database
         */
		await connectToDataBase(DATABASE);
	} catch (error) {
		console.error(error);
	}

	/**
     * App Listen
     */
	app.listen(PORT, () => {
		console.log(
			`[API] : Server running on port ${PORT} | ENVIRONMENT : ${ENV}`
		);
	});
};

start();
