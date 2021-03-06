// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200,
};

var obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 40,
  forcePoints: 9000
}
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
<<<<<<< HEAD
app.get("/", function (req, res) {
=======
app.get("/", (req, res) => {
  console.log("Yep! You hit the ROOT route.");
>>>>>>> 77788e67169e7a3738e393aee0b036d35a295afe
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function (req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function (req, res) {
  res.json(darthmaul);
});


app.get("/obiwankenobi", (req, res) => {
  res.json(obiwankenobi);
});
// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
