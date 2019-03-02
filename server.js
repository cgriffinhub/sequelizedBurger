var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 5000;
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

//Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	  });

	
});