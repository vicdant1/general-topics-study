require("dotenv").config();
const Express = require("express");
const app = new Express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5001;

const alunosRoutes = require("./routes/alunos.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/alunos", alunosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});