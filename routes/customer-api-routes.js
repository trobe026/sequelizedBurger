var db = require("../models");

module.exports = function(app) {
  app.get("/newCust", function(req, res) {
  db.burgers.findAll({}).then(function(results) {
    // console.log(results);

    var hbsObject = {
      burgers: results
    };

    res.render("newCust", hbsObject);
    // res.render("hof", hbsObject);
  });
});

  app.get("/hof", function(req, res) {
    db.customers.findAll({
      include: [{
        model: db.burgers,
        required: false
    }],
    order: [
      ['createdAt', 'DESC']
    ]
    }).then(function(results) {
      // console.log(results);
      // console.log(results[0].burgers);
      // console.log(results[0].customers);
      var hbsObject = {
        votes: results
      };
      res.render("hof", hbsObject);
      // console.log(hbsObject);
    });
  });


  app.post("/api/customers", function(req, res) {
    db.customers.create({
      customer_name: req.body.customer_name,
      burgerId: req.body.burgerId
    }).then(function(results) {
      res.json(results);

    })
    .catch(function(err) {
      res.json(err);

    })
    .then(function() {
      // res.redirect("/");
    });
  });

  // app.get("/api/customers", function(req, res) {
  //   db.customers.findAll({
  //     include: [db.burgers]
  //   }).then(function(results) {
  //     console.log(results);
  //     // console.log(results[0].burgers);
  //     // console.log(results[0].customers);
  //     var hbsObject = {
  //       votes: "test"
  //     };
  //     res.render("hof", hbsObject);
  //     // console.log(hbsObject2);
  //   });
  // });


}
