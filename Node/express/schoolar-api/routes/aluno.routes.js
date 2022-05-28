const Express = require("express");
const router = Express.Router();
const {Aluno, Turma} = require("../models/index");

router.get("/", async (req, res) => {
  const turmaTeste = await Turma.findByPk(1);
  const alunoTeste = await Aluno.findByPk(1);

  console.log(turmaTeste, alunoTeste);

  const teste = await turmaTeste.countAlunos();
  console.log(teste)

});


module.exports = router;