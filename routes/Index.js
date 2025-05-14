const express = require("express");
let router = express.Router();

router.get("/home-Page", (req, res) => {
  res.render("Home");
});

module.exports = router;
