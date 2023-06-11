var db = require("../db/productos");
const dbOrm = require('../database/models');
var listaDeProductos = db.listaDeProductos;
var usuario = db.usuario[0];
const users = dbOrm.User;
const bcrypt = require('bcryptjs');

var usersController ={
    register: function(req, res, next) {
        res.render("register");
      },
    profile: function(req, res, next) {
    res.render("profile", {usuario, lista:listaDeProductos});
    },
    login: function(req, res, next) {
        res.render("login");
      },
    profileEdit: function(req, res, next) {
        res.render("profile-edit", {usuario});
      },
    
 }
module.exports= usersController;
