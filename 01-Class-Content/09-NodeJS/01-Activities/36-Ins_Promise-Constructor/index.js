function myFunction(heroName, dcvsmarvel) {
  return new Promise(function (resolve, reject) {
    if (heroName !== "Blue Marvel") {
      return reject("You didnt give me a good hero");
    }

    resolve("Awesome! Thank you for resolving this promise");
  });
}

myFunction("Blue", "Marvel")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("I'VE CAUGHT AN ERROR FOR YOU!", err);
  });

async function resolveThatPromise() {
  try {
    let response = await myFunction("Blue", "Marvel");
  } catch (error) {
    console.log("let me know my error", error);
  }
}

resolveThatPromise();
