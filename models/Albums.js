const myClient = require("../Data-base/db");
myClient.connect();
myClient.query(`SELECT * FROM radiohead`, (err, res) => {
  if (!err) {
    console.log(res.rows);
    myClient.end();
  } else {
    console.log(err);
    myClient.end();
  }
});
