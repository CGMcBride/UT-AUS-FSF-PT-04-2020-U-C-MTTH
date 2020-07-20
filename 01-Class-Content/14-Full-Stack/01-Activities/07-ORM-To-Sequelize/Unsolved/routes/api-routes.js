// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
<<<<<<< HEAD
// var orm = require("../config/orm.js");
<<<<<<< HEAD

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    orm.getTodos(function (results) {
      res.json(results);
=======
let db = require("../models/index");
=======
var orm = require("../config/orm.js");

>>>>>>> fc971962f8e73c53ad9ba90f6b090211ac87e69b
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
<<<<<<< HEAD
  app.get("/api/todos", function (req, res) {
    // orm.getTodos(function (results) {
    //   res.json(results);
    // });
    db.Todo.findAll({}).then((data) => {
      res.json(data);
>>>>>>> 4debc7ab0a680230e01ce9ae80dd64bd1b11773c
=======
  app.get("/api/todos", function(req, res) {
    orm.getTodos(function(results) {
      res.json(results);
>>>>>>> fc971962f8e73c53ad9ba90f6b090211ac87e69b
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
<<<<<<< HEAD
<<<<<<< HEAD
  app.post("/api/todos", function (req, res) {
    orm.addTodo(req.body, function (results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    orm.deleteTodo(req.params.id, function (results) {
      res.json(results);
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function (req, res) {
    orm.editTodo(req.body, function (results) {
      res.json(results);
    });
  });
=======
  // app.post("/api/todos", function (req, res) {
  //   orm.addTodo(req.body, function (results) {
  //     res.json(results);
  //   });
  // });
=======
  app.post("/api/todos", function(req, res) {
    orm.addTodo(req.body, function(results) {
      res.json(results);
    });
  });
>>>>>>> fc971962f8e73c53ad9ba90f6b090211ac87e69b

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    orm.deleteTodo(req.params.id, function(results) {
      res.json(results);
    });
  });

<<<<<<< HEAD
  // // PUT route for updating todos. We can access the updated todo in req.body
  // app.put("/api/todos", function (req, res) {
  //   orm.editTodo(req.body, function (results) {
  //     res.json(results);
  //   });
  // });
>>>>>>> 4debc7ab0a680230e01ce9ae80dd64bd1b11773c
=======
  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    orm.editTodo(req.body, function(results) {
      res.json(results);
    });
  });
>>>>>>> fc971962f8e73c53ad9ba90f6b090211ac87e69b
};
