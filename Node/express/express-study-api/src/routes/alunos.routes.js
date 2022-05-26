const Express = require("express");
const router = Express.Router();

router.get('/', (req, res) => {
  console.log("asndfklasnkl")
  res.send('hello world');
});


module.exports = router;