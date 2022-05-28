'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      turma.hasMany(models.aluno, {
        foreignKey: 'turmaId',
      });
    }
  }
  turma.init({
    capacidade: DataTypes.INTEGER,
    codigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'turma',
  });
  return turma;
};