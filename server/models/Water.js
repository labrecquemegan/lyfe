const { Schema, Types } = require('mongoose');

const waterSchema = new Schema(
	{
		amount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Water = model('Water', waterSchema);

module.exports = { Water, waterSchema };
