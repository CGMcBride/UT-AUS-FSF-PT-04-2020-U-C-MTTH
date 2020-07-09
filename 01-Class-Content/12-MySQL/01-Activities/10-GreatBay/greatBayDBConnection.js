var mysql = require("mysql");
var inquire = require("inquire")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "greatBay_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
});

function postBid() {
    console.log("Do you want to post an item or bid?");
    var query = 
}