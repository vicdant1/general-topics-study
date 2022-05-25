const express = require("express");
const path = require("path");
const members = require('./Members')
const InitialMiddleware = require('./InitialMiddleware');
const app = express();
const PORT = process.env.PORT || 5000;


// setting information as json
app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/api/members/:id', (req, res) => {
  const {id} = req.params;
  res.send(id); 
});


// middlewares
// app.use(InitialMiddleware);
// creating a statc dir to the application
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`app running at ${PORT} port.`));