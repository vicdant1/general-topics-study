'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Alunos', 'turma_id', {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: 'Turmas',
        key: 'id',
        as: 'turma_id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Alunos', 'turma_id');
  }
};
