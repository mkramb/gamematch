module.exports = function(sequelize, DataTypes) {

  const User = sequelize.define('User', {
    sessionToken: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lolMMR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dota2MMR: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Challenge, {
          foreignKey: 'userId',
          as: 'challenges'
        });
      }
    }
  });

  return User;

};
