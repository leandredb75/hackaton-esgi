module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const Etude = require("../models/etudes.model");

  router.get("/getAll", async (req, res) => {
    const users = await Etude.find();
    res.json(users);
  });

  router.get("/etude-create", async (req, res) => {
    const user = new Etude({ product_id: 54, userId: 2 });

    await user.save().then(() => console.log("Etude created"));

    res.send("Etude created \n");
  });

  app.use("/api/etudes", router);
};
