const _ = require('lodash');
const faker = require('faker');
const User = require('./../models').User;
const types = require('../config/types.json');
const games = _.values(types.games);

module.exports = {

  up: (queryInterface, Sequelize) => {
    const entries = 40;
    const stake = { min: 20, max: 250 };
    const challenges = [];

    return User.findAll()
      .then((users) => {
        const userIds =_.map(
          users, (user) => user.id
        );

        _.times(entries, () => {
          challenges.push({
            userId: faker.random.arrayElement(userIds),
            game: faker.random.arrayElement(games),
            stake: faker.random.number(stake)
          });
        });

        queryInterface.bulkInsert('Challenges', challenges);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Challenges', null);
  }

};
