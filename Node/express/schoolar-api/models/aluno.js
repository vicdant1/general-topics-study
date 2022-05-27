"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Aluno.belongsTo(models.Turma, {
        constraints: true,
        foreignKey: "turma_id",
        onDelete: "CASCADE",
      });
    }
  }
  Aluno.init(
    {
      nome: DataTypes.STRING,
      matricula: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dataNascimento: DataTypes.DATE,
      sexo: DataTypes.STRING,
      turma_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Aluno",
    }
  );
  return Aluno;
};
