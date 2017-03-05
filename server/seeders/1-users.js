const _ = require('lodash');
const crypto = require('crypto');
const faker = require('faker');
const types = require('../config/types.json');

const md5Hex = name => crypto
  .createHash('md5')
  .update(name)
  .digest('hex');

module.exports = {

  up: (queryInterface, Sequelize) => {
    const entries = 100;
    const users = [];

    _.times(entries, () => {
      users.push({
        username: faker.internet.userName(),
        lolMMR: faker.random.arrayElement(types.gameMMR),
        dota2MMR: faker.random.arrayElement(types.gameMMR)
      });
    });

    const middleMMR = types.gameMMR[
      Math.round(types.gameMMR.length / 2)
    ];

    users.push({
      sessionToken: md5Hex('mitja'),
      username: 'mitja',
      lolMMR: middleMMR,
      dota2MMR: middleMMR
    });

    return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null);
  }

};
