const db = require("./models/index")
const Express = require("express")
const Aluno = db["aluno"];
const app = new Express();


app.get("/", async (req, res) => {
  const alunoBanco = await Aluno.findByPk(1);

  res.json("teste");

});










app.listen(5000, () => console.log("app is listening on port 5000"))