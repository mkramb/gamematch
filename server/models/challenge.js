const _ = require('lodash');
const types = require('../config/types.json');
const games = _.values(types.games);

module.exports = function(sequelize, DataTypes) {

  const Challenge = sequelize.define('Challenge', {
    game: {
      type: DataTypes.ENUM(...games)
    },
    stake: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Challenge.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });

  return Challenge;

};