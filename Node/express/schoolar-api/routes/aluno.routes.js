const Express = require("express");
const router = Express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello World",
  });
});


module.exports = router;