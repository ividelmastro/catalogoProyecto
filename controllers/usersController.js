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
 
    create: function (req, res) {
        
        
        users.findOne({
                where: [{
                    email: req.body.email 
                }]
            })
            .then(function (user) {
                if (user !== null) {
                    
                    return res.render('register');
                } else {
                    
                    let user = {
                        email: req.body.email,
                        dni: req.body.nroDocumento,
                        username: req.body.username,
                        password: bcrypt.hashSync(req.body.pwd, 10), 
                        profilePhoto: "/images/users/default-image.png",
                        dateBirth: req.body.dateBirth,
                    }
            
                    users.create(user) 
                        .then(function () { 
                            
                           
                            return res.redirect('/')
                        })
                        .catch(error => console.log(error))
                      
                }
            })
            .catch(errors => {
                
                return res.render('register');
            })
    },
    signIn: function (req, res) {
      res.locals.errores = "";
      let errores = {};
      users.findOne({
              where: [{
                  email: req.body.email
              }]
          })
          .then(function (user) {
              if (user !== null) {
                  if (bcrypt.compareSync(req.body.pwd, user.password)) {
                      req.session.user = user.dataValues;
                      
                      
                      return res.redirect('/');
                  } else {
                      
                      
                      return res.render('login');
                  }
              } else {
                  
                  return res.render('login');
              }
          })
          .catch(error => {
              console.log(error);
              return res.render('login');
          })
  },
 }


module.exports= usersController;
