const { Turma } = require("../models/index");

const getTurmas = async (req, res) => {
  const turmas = await Turma.findAll();
  res.status(200).json(turmas);
}

const getTurmaById = async (req, res) => {
  const { id } = req.params;

  if (parseInt(id) <= 0) return res.status(401).json({ error: "Id inválido" });

  const turma = await Turma.findOne({ where: { id } });

  res.status(200).json(turma);
}

const createTurma = async (req, res) => {
  const { codigo } = req.body;

  if (codigo.length <= 3)
    return res
      .status(401)
      .json({ error: "Código inválido (deve ter mais de 3 caracteres)" });

  if (codigo.length > 20)
    return res
      .status(401)
      .json({ error: "Código inválido (deve ter menos de 20 caracteres)" });

  const turmaCriada = await Turma.create({ codigo });

  res.status(201).json(turmaCriada);
}

const updateTurma = async (req, res) => {
  const { id } = req.params;
  const { codigo } = req.body;

  if (parseInt(id) <= 0) return res.status(401).json({ error: "Id inválido" });

  if (codigo.length <= 3)
    return res
      .status(401)
      .json({ error: "Código inválido (deve ter mais de 3 caracteres)" });

  if (codigo.length > 20)
    return res
      .status(401)
      .json({ error: "Código inválido (deve ter menos de 20 caracteres)" });

  try 
  {
    await Turma.update({ codigo }, { where: { id } });

    res.status(200).json({ message: "Turma atualizada com sucesso" });
  } 
  catch (e)
  {
    res.status(500).json({ error: "Erro ao atualizar turma" });
  }
}

const deleteTurma = async (req, res) => {
  const { id } = req.params;

  if (parseInt(id) <= 0) return res.status(401).json({ error: "Id inválido" });

  try
  {
    await Turma.destroy({ where: { id } });
    res.status(200).json({ message: "Turma deletada com sucesso" });
  }
  catch(e)
  {
    res.status(500).json({ error: "Erro ao deletar turma" });
  }
}

module.exports = {
  getTurmas,
  getTurmaById,
  createTurma,
  updateTurma,
  deleteTurma
}