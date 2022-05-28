'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'turmaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'turmas',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('alunos', 'turmaId');
  }
};
