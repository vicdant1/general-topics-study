const Express = require("express");
const router = Express.Router();
const db = require("../models/index");
const { Aluno, Turma } = db;

router.get("/", async (req, res) => {
  const alunos = await Aluno.findAll({
    attributes: ["id", "nome", "matricula"],
  });

  if (alunos.length > 0) return res.status(200).json(alunos);
  else return res.status(404).json({ message: "Nenhum aluno encontrado" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (parseInt(id) <= 0) return res.json({ message: "Id inválido" });

  const aluno = await Aluno.findOne({
    where: { id },
    include: { model: Turma },
  });

  if (aluno == null) return res.json({ message: "Aluno não encontrado" });

  res.status(200).json(aluno);
});

router.post("/createAluno", async (req, res) => {
  const { nome, matricula, cpf, dataNascimento, sexo, codigoTurma } = req.body;

  const turma = await Turma.findOne({ where: { codigo: codigoTurma } });

  if (!turma) return res.status(400).json({ error: "Turma não encontrada" });

  const alunoCriado = await Aluno.create({
    nome,
    matricula,
    cpf,
    dataNascimento,
    sexo,
  });

  alunoCriado.setTurma(turma.id);

  return res.status(201).json(alunoCriado);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, matricula, cpf, dataNascimento, sexo, codigoTurma } = req.body;

  const turma = await Turma.findOne({ where: { codigo: codigoTurma } });

  if (!turma) return res.status(400).json({ error: "Turma não encontrada" });

  try {
    const alunoAtualizado = await Aluno.update(
      {
        nome,
        matricula,
        cpf,
        dataNascimento,
        sexo,
        turma_id: turma.id,
      },
      {
        where: { id },
      }
    );

    return res.status(200).json({ message: "Aluno atualizado com sucesso" });
  } catch (e) {
    return res.status(500).json({ error: "Erro ao atualizar aluno" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (parseInt(id) <= 0) return res.json({ message: "Id inválido" });

  try {
    await Aluno.destroy({
      where: { id },
    });
    return res.status(200).json({ message: "Aluno deletado com sucesso" });
  } catch (e) {
    return res.status(500).json({ error: "Erro ao deletar aluno" });
  }
});

module.exports = router;
