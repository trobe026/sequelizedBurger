var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req, res) {
    console.log("sup");
    // db.burgers.findAll({}).then(function(results) {
    //   var hbsObject = {
    //     burgers: results
    //   };
    //
    //   res.render("index", hbsObject);
    //   console.log(hbsObject)
    //   // res.render("hof", hbsObject);
    // });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      res.json(err);
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
