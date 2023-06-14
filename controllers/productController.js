var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;
const dbOrm = require('../database/models');
const users = dbOrm.User;
const products = dbOrm.Product;
const comments = dbOrm.Comment;

var productController = { 
    productos: function(req, res, next) {
        products.findByPk(req.params.id)
        
          .then((producto) => {
            console.log(producto);
               return res.render('product', {
                title: 'Product' , item:producto, comentarios:db.comentarios});
            })
          .catch((error) => {
            console.log(error)
            return res.send(error);
          })
        
        //res.render('product', {title: 'Product' ,item:listaDeProductos[req.params.id],  comentarios:db.comentarios, usuario:db.usuario});
    },
    agregarProductos: function(req, res, next) {
        res.render('product-add',  {title: 'Agregar producto', item:listaDeProductos[req.params.id], comentarios:db.comentarios, usuario:db.usuario});
        },
    editarProductos: function(req, res, next) {
        res.render('product-edit',  {title: 'Editar producto', item:listaDeProductos[req.params.id], comentarios:db.comentarios, usuario:db.usuario});
        },
        create: function (req, res) {
          //console.log(req.session)
            let producto = {
              userId: req.session.user.id,
              nameProduct: req.body.producto,
              description: req.body.descripcion,
              photoProduct: req.file.filename
            }

            products.create(producto)
        
              .then(function () {
                return res.redirect('/')
              })
              .catch(error => console.log(error))
        
          },
    

}

module.exports= productController;

