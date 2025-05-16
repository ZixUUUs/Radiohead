const express = require("express");
const app = express();
const PORT = 3000;
const albumController = require("./controllers/albumController");
const homePage = require("./routes/Index");
const redirect = require("./routes/redirect");
let path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "publics")));

app.use("/", homePage);
app.use("/", redirect);

albumController.defaultAlbums().then(() => {
  console.log("albums verified and checked");
  app.listen(PORT);
});
