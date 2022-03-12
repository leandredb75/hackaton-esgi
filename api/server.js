const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const cors = require("cors");
var router = express.Router();
const users = require("./src/routes/users.js");
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.get("/user-create", async (req, res) => {
//   const user = new User({ username: "userTest" });

//   await user.save().then(() => console.log("User created"));

//   res.send("User created \n");
// });

require("./src/routes/users")(app);
require("./src/routes/etudes")(app);
require("./src/routes/auth")(app);

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
