var db = require("../db/productos");
const dbOrm = require('../database/models');
var listaDeProductos = db.listaDeProductos;
var usuario = db.usuario[0];
const users = dbOrm.User;
const bcrypt = require('bcryptjs');
const products = dbOrm.Product;

var usersController ={
    register: function(req, res, next) {
        res.render("register");
      },
    profile: function (req, res) {
        users.findOne({
                where: [{
                    id: req.params.id
                }],
            }).then(async function (user) {
                const productsResults = products.findAll({
                    where: [{
                        userId: req.params.id
                    }],
                    include: [ { association: 'user' }, {
                        association: 'comments',
                        include: [{
                          association: 'user'
                        }]
                    }]
                })
                
                return res.render('profile', {
                    usuario: user,
                    productos: productsResults,
   
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    login: function (req, res) {
        console.log(req.session.user)
        console.log(res.locals)
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
        return res.render('login')
       }
    },
    logout: function (req, res) {
        console.log(req.session)
        req.session.destroy();
        if (req.cookies.userId !== undefined) {
            res.clearCookie('userId')
        }
        return res.redirect('/')
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
                        profilePhoto: req.file.filename,
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
                    if (req.body.recordarme) {
                        res.cookie('userId', user.dataValues.id, {
                            maxAge: 3000000
                        })
                    }
                      
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
