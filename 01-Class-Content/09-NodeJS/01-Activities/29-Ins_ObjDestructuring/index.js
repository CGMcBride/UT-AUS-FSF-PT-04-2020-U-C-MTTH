const arya = {
  name: "Arya Stark",
  parents: ["Eddard Stark", "Catelyn Stark"],
};

const jaime = {
  name: "Jaime Lannister",
  parents: ["Tywin Lannister", "Joanna Lannister"],
};

const { name, parents } = jaime;
// const name = jaime.name;
// const parents = jaime.parents
console.log(name); // prints `"Jaime Lannister"`
console.log(parents); // prints `["Tywin Lannister", "Joanna Lannister"]`

// We can also rename our destructured properties like so:

const { name: jaimeName } = jaime;
console.log(jaimeName); // prints `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>
  console.log(
    character.name +
      "'s parents are: " +
      character.parents[0] +
      " and " +
      character.parents[1] +
      "."
  );

logCharacter(arya);

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(
    name + "'s parents are: " + parents[0] + " and " + parents[1] + "."
  );

betterLogCharacter(jaime);
