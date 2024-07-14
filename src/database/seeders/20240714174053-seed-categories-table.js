'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Tecnologias Back-end', position: 10, created_at: new Date(), updated_at: new Date() },
      { name: 'Tecnologias Front-end', position: 20, created_at: new Date(), updated_at: new Date() },
      { name: 'Ferramentas de Desenvolvimento', position: 30, created_at: new Date(), updated_at: new Date() },
      { name: 'Soft-skills', position: 40, created_at: new Date(), updated_at: new Date() },
      { name: 'Carreira', position: 50, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
