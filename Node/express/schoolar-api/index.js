require("dotenv").config();
const Express = require("express");
const bodyParser = require('body-parser');
const AlunoRoutes = require("./routes/aluno.routes");
const TurmasRoutes = require("./routes/turma.routes");

const app = new Express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/alunos", AlunoRoutes);
app.use("/api/turmas", TurmasRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})