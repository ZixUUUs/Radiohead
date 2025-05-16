const express = require("express");
const albumController = require("../controllers/albumController");
let router = express.Router();

router.get("/home-Page", async (req, res) => {
  try {
    const allData = await albumController.getAllAlbums();
    console.log("All DATA SUCCSSEFULY FETCHED");
    res.render("Home", { albums: allData });
  } catch (err) {
    console.error("Error fetching albums:", err);
    res.render("Home", { albums: [] });
  }
});

module.exports = router;
