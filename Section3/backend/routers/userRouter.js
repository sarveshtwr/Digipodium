const express = require("express");

const router = express.Router();

router.get("/add", (req, res) => {
  res.send("response from user add");
});
router.get("/getall", (req, res) => {
  res.send("response from user add");
});
router.get("/getbyid", (req, res) => {
  res.send("response from user add");
});
router.get("/delete", (req, res) => {
  res.send("response from user add");
});
router.get("/update", (req, res) => {
  res.send("response from user add");
});
//getall
//getbyid
//delete
//update

module.exports = router;
