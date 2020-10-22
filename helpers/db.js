const mongoose = require('mongoose');

exports.connectToDataBase = (db_url) => {
	mongoose
		.connect(db_url, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('[API] : Database Connected'))
		.catch((error) => {
			console.error(
				'[API] : Database connection couldnot be established'
			);
			console.error(JSON.stringify(error));
		});
};
