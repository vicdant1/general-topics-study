const Express = require("express");
const router = Express.Router();
const alunosController = require("../controllers/alunos.controller");


router.get("/", alunosController.getAlunos);

router.get("/:id", alunosController.getAlunoById);

router.post("/createAluno", alunosController.createAluno);

router.put("/:id", alunosController.updateAluno);

router.delete("/:id", alunosController.deleteAluno);

module.exports = router;
