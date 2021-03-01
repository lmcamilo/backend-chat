module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
  },
};
