function myFunction(heroName, dcvsmarvel) {
  return new Promise(function (resolve, reject) {
    if (heroName !== "Blue Marvel") {
      return reject("You didnt give me a good hero");
    }

    resolve("Awesome! Thank you for resolving this promise");
  });
}

myFunction("Blue Marvel", "Marvel")
  .then(function (data) {
    console.log("I'm resolved!", data);
  })
  .catch(function (err) {
    console.log("I'VE CAUGHT AN ERROR FOR YOU!", err);
  });
