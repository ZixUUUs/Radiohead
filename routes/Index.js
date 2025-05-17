const express = require("express");
const albumController = require("../controllers/albumController");
const { getAlbums } = require("../models/Albums");
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

router.post("/add-album", async (req, res) => {
  let newTitle = req.body.title;
  let newPic = req.body.picture;
  let newNum = req.body.sumtracks;
  try {
    if (!newTitle || !newPic || !newNum) {
      let errorMessage = "please add an album wela 9awed essm3 zina";
      const allData = await albumController.getAllAlbums();
      console.log("getting back data no new info!!!");
      res.render("Home", { albums: allData, errorMessage });
    } else {
      const newAlbum = await albumController.checkOrAdd(
        newTitle,
        newPic,
        newNum
      );
      console.log("added sucssusfuly to database");

      res.redirect("/");
    }
  } catch (err) {
    console.error("there was a probleme editing new album", err);
    res.render("Home");
  }
});

module.exports = router;
