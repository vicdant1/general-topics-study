const Express = require("express");
const app = Express();
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./db");


app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
})