const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  // res.send("Hello world.");
  res.sendFile(path.join(__dirname, 'index.html'));
});





app.listen(PORT, () => console.log(`app running at ${PORT} port.`))