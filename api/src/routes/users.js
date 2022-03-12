module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const User = require("../models/User.model");

  router.get("/getAll", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  router.get("/user-create", async (req, res) => {
    const user = new User({ username: "userTest" });
    await user.save().then(() => console.log("User created"));

    res.send("User created \n");
  });

  app.use("/api/users", router);
};
