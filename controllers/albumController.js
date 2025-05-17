const myClient = require("../Data-base/db");
const Albums = require("../models/Albums");
const addAlbums = Albums.addAlbums;
const getAlbums = Albums.getAlbums;
const checkOrAdd = Albums.checkAlbums;
myClient.connect();

const defaultAlbums = async () => {
  try {
    let okComputer = await Albums.checkAlbums(
      "Ok Computer",
      "Images/Ok computer.jpg",
      12
    );
    let aMoonShapedPool = await Albums.checkAlbums(
      "A moon shaped pool",
      "Images/A moon shaped pool.jpg",
      11
    );
    let kidA = await Albums.checkAlbums("Kid A", "Images/Kid A.jpg", 10);

    console.log("defaultAlbums on work");
    return {
      okComputer,
      aMoonShapedPool,
      kidA,
    };
  } catch (err) {
    console.log(err);
    console.error("error executing !!");
    return null;
  }
};

const getAllAlbums = async () => {
  try {
    let myAlbums = await getAlbums();
    console.log("album en chargement");
    return myAlbums;
  } catch (err) {
    console.error(err);
    return null;
  }
};
module.exports = { defaultAlbums, getAllAlbums, addAlbums, checkOrAdd };
