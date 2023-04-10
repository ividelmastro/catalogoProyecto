var db = require("../db/productos");
var usuario = db.usuario[0];


var usersController ={
    register: function(req, res, next) {
        res.render("register");
      },
    profile: function(req, res, next) {
        res.render("profile", {usuario});
      },
    login: function(req, res, next) {
        res.render("login");
      },
    profileEdit: function(req, res, next) {
        res.render("profile-edit", {usuario});
      },
    agregarProductos: function(req, res, next) {
      res.render('product-add', { usuario});
      },
 }
module.exports= usersController;
