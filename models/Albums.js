const myClient = require("../Data-base/db");

const getAlbums = async () => {
  try {
    let myRequest = await myClient.query(`SELECT * FROM radiohead`);
    return myRequest.rows;
  } catch (error) {
    console.log(error);
    console.error("couldn't get the Table radiohead");
    return null;
  }
};
const addAlbums = async (title, picture, sumTracks) => {
  try {
    let insertNew = await myClient.query(
      `INSERT INTO radiohead (title, picture, sumTracks) VALUES ($1,$2,$3)`,
      [title, picture, sumTracks]
    );
    console.log("added succesfuly");
    return insertNew;
  } catch (error) {
    console.log(error);
    console.error(`there's was a probleme in your insertion`);
    return null;
  }
};

const checkAlbums = async (title, picture, sumTracks) => {
  try {
    let check = await myClient.query(
      `SELECT * FROM radiohead WHERE "title" = $1`,
      [title]
    );
    if (check.rows.length === 0) {
      await addAlbums(title, picture, sumTracks);
      return true;
    } else {
      console.log("default existe next...");
      return false;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
module.exports = { getAlbums, addAlbums, checkAlbums };
