const express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.name], (result) => {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", (req, res) => {
      burger.updateOne(["devoured"], [1], [req.params.id], (result) => {
        result.changedRows == 0 ? res.status(404).end : res.status(200).end();
      });
    });
  
  // Export routes for server.js to use.
  module.exports = router;
  