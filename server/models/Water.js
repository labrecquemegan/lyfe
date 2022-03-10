const { Schema, Types } = require('mongoose');

console.log('inside Water.js');

const waterSchema = new Schema(
	{
		date: {
			type: Date,
			default: Date.now(),
		},
		amount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = waterSchema;
