const express = require("express");
const Model = require("../models/userModel");

const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/getbyemail", (req, res) => {
  res.send("response from user getbyemail");
});
router.get("/getbyid", (req, res) => {
  res.send("response from user id");
});
router.get("/delete", (req, res) => {
  res.send("response from user delete");
});
router.get("/update", (req, res) => {
  res.send("response from user update");
});
//getall
//getbyid
//delete
//update

module.exports = router;
