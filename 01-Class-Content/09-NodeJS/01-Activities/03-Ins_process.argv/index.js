// returns an array of command line arguments
console.log(process.argv);
if (process.argv[2].toLowerCase() === "antonio") {
  console.log("Hey its me");
}
// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);
// 1st index = Where can i find node?
// 2nd index = what did you ask me to run
// everything after it will be the arguments from the user
