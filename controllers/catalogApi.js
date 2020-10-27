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
 * Utility function to 
 * create a new product in
 * the PayPal catelog DB
 */
exports.createProduct = (req, res) => {
	const name = req.body.pname;
	const type = req.body.type;

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
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			auth: {
				username: CLIENT_ID,
				password: SECRET
			},
			data: {
				name,
				type
			}
		})
			.then((resp) => {
				console.log('Success');
				res.status(200).json({
					response: resp.data
				});
			})
			.catch((error) => {
				console.log('Error');
				res.json({
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
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			auth: {
				username: CLIENT_ID,
				password: SECRET
			}
		})
		.then((response) => {
			console.log('Success');
			res.status(200).json({
				data: response.data
			});
		})
		.catch((error) => {
			console.log('Error');
			res.json({
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
