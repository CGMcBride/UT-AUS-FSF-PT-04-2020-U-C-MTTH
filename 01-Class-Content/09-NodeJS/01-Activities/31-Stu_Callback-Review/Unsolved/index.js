const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  console.log(animalJSON);
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});