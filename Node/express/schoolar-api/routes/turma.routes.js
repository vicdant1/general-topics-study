const Express = require("express");
const {Turma} = require("../models/index");;
const router = Express.Router();

router.get("/", async (req, res) => {
  const turmas = await Turma.findAll();
  res.status(200).json(turmas);
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;

  if(parseInt(id) <= 0)
    return res.status(401).json({ error: "Id inválido"});

  const turma = await Turma.findOne({ where: { id }});

  res.status(200).json(turma);
});

router.post("/createTurma", async (req, res) => {
  const {codigo} = req.body;

  if(codigo.length <= 3)
    return res.status(401).json({ error: "Código inválido (deve ter mais de 3 caracteres)"});

  if(codigo.length > 20)
    return res.status(401).json({ error: "Código inválido (deve ter menos de 20 caracteres)"});

  const turmaCriada = Turma.create({ codigo });

  res.status(201).json(turmaCriada);
});

router.put("/:id", async (req, res) => {
  const {id} = req.params;
  const {codigo} = req.body;

  if(parseInt(id) <= 0)
    return res.status(401).json({ error: "Id inválido"});

  const turmaAtualizada = await Turma.update({ codigo }, { where: { id }});
  res.status(200).json(turmaAtualizada);
});

router.delete("/:id", async (req, res) => {
  const {id} = req.params;

  if(parseInt(id) <= 0)
    return res.status(401).json({ error: "Id inválido"});

  const turmaDeletada = Turma.destroy({ where: { id }});

  res.status(200).json(turmaDeletada);
});

module.exports = router;