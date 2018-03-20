// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all data
  app.get("/api/UniRates2", function(req, res) {
    db.UniRates2.findAll({}).then(function(dbUniRates2) {
      res.json(dbUniRates2);
    });
  });

{category: 'Technical_Engineering',location: '',ed_level: 'Bachelors',pay_minimum: 69000,pay_maximum: 86000},
  // POST route for saving a new data
  app.post("/api/UniRates2", function(req, res) {
    console.log(req.body);
    db.UniRates2.create({
      category: req.body.category,
      location: req.body.location,
      ed_level: req.body.ed_level,
      pay_minimum: req.body.pay_minimum,
      pay_maximum: req.body.pay_maximum
    }).then(function(dbUniRates2) {
      res.json(dbUniRates2);
    });
  });

  // DELETE route for deleting todos. We can get the id we want to delete from
  // req.params.id
  app.delete("/api/UniRates2/:id", function(req, res) {
    // We just have to specify which row we want to destroy with "where"
    db.UniRates2.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUniRates2) {
      res.json(dbUniRates2);
    });
  });

  // PUT route for updating. We can get the updated row from req.body
  app.put("/api/UniRates2", function(req, res) {
    db.UniRates2.update({
      category: req.body.category,
      location: req.body.location,
      ed_level: req.body.ed_level,
      pay_minimum: req.body.pay_minimum,
      pay_maximum: req.body.pay_maximum
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUniRates2) {
      res.json(dbUniRates2);
    });
  });
  
};
