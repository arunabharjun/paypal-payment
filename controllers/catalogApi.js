const axios = require('axios');
const {
	API,
	API_VERSION,
	CATELOGS_ENDPOINT,
	CLIENT_ID,
	SECRET
} = require('../config');

/**
 * The APIs
 */
const api = `${API}/${API_VERSION}`;
const catelogAPI = `${api}/${CATELOGS_ENDPOINT}`;

/**
 * Common headers & authentication for the requests
 */
const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
};
const auth = {
	username: CLIENT_ID,
	password: SECRET
};

/**
 * Utility function to 
 * create a new product in
 * the PayPal catelog DB
 */
exports.createProduct = (req, res) => {
	const name = req.body.pname;
	const type = req.body.type;

	const data = {
		name,
		type
	};

	if (!name) {
		res.json({
			error: 'Product name is a required field.'
		});
	}
	else if (!type) {
		res.json({
			error: 'Product type is a required field.'
		});
	}
	else {
		axios({
			method: 'post',
			url: catelogAPI,
			headers,
			auth,
			data
		})
			.then((response) => {
				console.log(`Successfully created ${JSON.stringify(data)}`);
				res.status(201).json({
					response: response.data
				});
			})
			.catch((error) => {
				console.log(`Failed to create ${JSON.stringify(data)}`);
				res
					.status(error.response.status ? error.response.status : 409)
					.json({
						error
					});
			});
	}
};

/**
 * Utility function to 
 * fetch the list of products
 * in the PayPal catelog DB
 */
exports.listProducts = (req, res) => {
	axios
		.get(catelogAPI, {
			headers,
			auth
		})
		.then((response) => {
			console.log(
				'Successfully fetched the list of products from catelog.'
			);
			res.status(200).json({
				data: response.data
			});
		})
		.catch((error) => {
			console.log('Failed to fetched the list of products from catelog.');
			res
				.status(error.response.status ? error.response.status : 409)
				.json({
					error
				});
		});
};

/**
 * Test API Demo
 */
exports.api = (req, res) => {
	res.json({
		msg: 'it works'
	});
};
