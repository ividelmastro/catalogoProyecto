var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;
var usuario = db.usuario[0];


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
    agregarProductos: function(req, res, next) {
      res.render('product-add', { usuario});
      },
    productos: function(req, res, next) {
      res.render('product', {title: 'Producto' ,item:listaDeProductos[req.params.id],  comentarios:db.comentarios, usuario:db.usuario});
    },
    
 }
module.exports= usersController;
