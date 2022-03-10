const db = require('../config/connection');
const { User, Exercise, Mindfulness, Water, Meal } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
	try {
		await User.deleteMany({});
		await User.create(userSeeds);

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
