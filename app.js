const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/Index");
const redirect = require("./routes/redirect");
let path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "publics")));

app.use("/", redirect);
app.use("/", homePage);

app.listen(PORT);
