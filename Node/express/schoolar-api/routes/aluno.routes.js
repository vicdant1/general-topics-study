const Express = require("express");
const router = Express.Router();
const { Aluno, Turma } = require("../models/index");

router.get("/", async (req, res) => {
  const alunos = await Aluno.findAll();
  return res.status(200).json(alunos);
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  const aluno = await Aluno.findOne({ where: { id }});
  res.status(200).json(aluno);
});

router.post("/createAluno", async (req, res) => {
  const {nome, matricula, cpf, dataNascimento, sexo, codigoTurma } = req.body;

  const turma = await Turma.findOne({where: {codigo: codigoTurma}});

  if(!turma)
    return res.status(400).json({error: "Turma não encontrada"});
  
  const alunoCriado = Aluno.create({
    nome,
    matricula,
    cpf,
    dataNascimento,
    sexo
  });

  alunoCriado.setTurma(turma);

  return res.status(201).json(alunoCriado);
});

router.put("/:id", async (req, res) => {
  const {id} = req.params;
  const {nome, matricula, cpf, dataNascimento, sexo, codigoTurma } = req.body;

  const turma = await Turma.findOne({where: {codigo: codigoTurma}});

  if(!turma)
    return res.status(400).json({error: "Turma não encontrada"});
  
  const alunoAtualizado = await Aluno.update({
    nome,
    matricula,
    cpf,
    dataNascimento,
    sexo
  }, {
    where: {id}
  });

  await alunoAtualizado.setTurma(turma);

  return res.status(200).json(alunoAtualizado);
});

router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  const alunoDeletado = await Aluno.destroy({
    where: {id}
  });
  return res.status(200).json(alunoDeletado);
});

module.exports = router;
