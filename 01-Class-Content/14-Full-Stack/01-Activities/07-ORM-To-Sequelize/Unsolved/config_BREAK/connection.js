// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require("./node_modules/mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
<<<<<<< HEAD:01-Class-Content/14-Full-Stack/01-Activities/07-ORM-To-Sequelize/Unsolved/config_BREAK/connection.js
    database: "todolist"
=======
    database: "todolist",
>>>>>>> 4debc7ab0a680230e01ce9ae80dd64bd1b11773c:01-Class-Content/14-Full-Stack/01-Activities/07-ORM-To-Sequelize/Unsolved/config/connection.js
  },

  // jawsDB
  jawsDB: {
    host: "<host name>",
    port: 3306,
    user: "<name of user>",
    password: "<password>",
    database: "<name of database>",
  },
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.localhost);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
