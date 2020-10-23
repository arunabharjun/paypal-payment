const axios = require('axios');
const {
	API,
	API_VERSION,
	CATELOGS_ENDPOINT,
	CLIENT_ID,
	SECRET
} = require('../config');

const api = `${API}/${API_VERSION}`;
const catelogAPI = `${api}/${CATELOGS_ENDPOINT}`;

exports.createProduct = (req, res) => {
	const name = req.body.pname;
	const type = req.body.type;
	axios
		.post(catelogAPI, {
			headers: {
				Authorization: `Basic ${CLIENT_ID}:${SECRET}`,
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
};

/**
 * Demo
 */
exports.api = (req, res) => {
	res.json({
		msg: 'it works'
	});
};
