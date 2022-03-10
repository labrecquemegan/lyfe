const { Schema, Types } = require('mongoose');

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
