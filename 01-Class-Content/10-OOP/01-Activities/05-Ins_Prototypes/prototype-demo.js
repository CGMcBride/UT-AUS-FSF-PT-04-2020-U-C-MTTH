// 1.
myArray = [2, 4, 6, 8];
console.log(myArray);
// forEach is attached to the protype of Array
myArray.forEach((num) => console.log(num));

myArray.map((x) => console.log(x * 2));
//

// 2.
myObject = {
  name: "Eric",
  age: 28,
  occupation: "Curriculum Dev",
};

console.log(myObject);

console.log("Hello");
console.log("Hello".toLowerCase());

console.log(typeof 1337);
console.log((1337).toString());
//

// 3.
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

const theShining = new Movie("The Shining", 1980);
Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};
theShining.logInfo();

console.log(theShining.hasOwnProperty("title"));
console.log(theShining.hasOwnProperty("logInfo"));
console.log(Movie.prototype.hasOwnProperty("logInfo"));
//
