var express = require("express");

var router = express.Router();

var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burgers.findAll({}) .then(function(results){
    res.render("index",{
      burger_data: results 
      });
  });
});



// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.burgers.create({
    burger_name: req.body.burger_name
  })
  .then(function(results){
    res.redirect("/burgers");
  });
});
  

// put route -> back to index
router.put("/burgers/:id", function(req, res) {

	db.burgers.update({
			devoured: true,
			id: req.params.id
		},
		{
			where: {id : req.params.id}
		}).then(function(data){
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
});

module.exports = router;
