const Express = require("express");
const turmasController = require("../controllers/turmas.controller");

const router = Express.Router();

router.get("/", turmasController.getTurmas);

router.get("/:id", turmasController.getTurmaById);

router.post("/createTurma", turmasController.createTurma);

router.put("/:id", turmasController.updateTurma);

router.delete("/:id", turmasController.deleteTurma);

module.exports = router;
