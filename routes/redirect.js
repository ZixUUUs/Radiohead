const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/home-page");
});

module.exports = router;
