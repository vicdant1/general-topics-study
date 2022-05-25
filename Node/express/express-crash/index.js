const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const path = require("path");

const InitialMiddleware = require("./InitialMiddleware");
const MembersRoutes = require('./routes/api/membersRoutes')

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/api/members', MembersRoutes);

app.listen(PORT, () => console.log(`app running at ${PORT} port.`));
