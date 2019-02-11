// implement your API here
const express = require("express");
const db = require("./data/db.js");

const server = express();

server.use(express.json());

server.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log("newUser", newUser);
  db.user

    .add(user)
    .then(user => {
      res.status(201).json({ success: true, user });
    })

    .catch(({ code, message }) => {
      res.status(code).json({ success: false, message });
    });
});

server.get("/api/users", (req, res) => {
  db.users
    .find()
    .then(users => {
      res.status(200).json({ success: true, users }); // sets the Content-Type header
    })
    .catch(err => {
      res.status(err.code).json({ success: false, message: err.message });
    });
});

server.listen(4000, () => {
  console.log("\n*** Running on port 4000 ***\n");
});
