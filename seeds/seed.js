const sequelize = require('../config/connection');
const { User, Favorite } = require('../models');

const userData = require('./userData.json');
const favoriteData = require('./favoriteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favorite of favoriteData) {
    await Favorite.create({
      ...favorite,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
