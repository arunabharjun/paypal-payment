const axios = require('axios');
const {
	API,
	API_VERSION,
	CATELOGS_ENDPOINT,
	CLIENT_ID,
	SECRET,
	ACCESS_TOKEN
} = require('../config');

const api = `${API}/${API_VERSION}`;
const catelogAPI = `${api}/${CATELOGS_ENDPOINT}`;

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
		axios
			.post(catelogAPI, {
				// headers: {
				// 	Authorization: `Basic ${CLIENT_ID}:${SECRET}`,
				// 	'Content-Type': 'application/json'
				// },
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
					'Content-Type': 'application/json'
				},
				data: {
					name,
					type
				}
			})
			.then((response) => {
				console.log('Success');
				res.json({
					response
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

exports.listProducts = (req, res) => {
	axios
		.get(catelogAPI, {
			headers: {
				Authorization: `Basic ${CLIENT_ID}:${SECRET}`,
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			console.log('Success');
			res.json({
				response
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
