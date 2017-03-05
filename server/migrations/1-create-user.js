module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sessionToken: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lolMMR: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dota2MMR: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }

};
