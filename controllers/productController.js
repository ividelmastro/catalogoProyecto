var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;


var productController = { 
    productos: function(req, res, next) {
        res.render('product', {title: 'Producto' ,item:listaDeProductos[req.params.id],  comentarios:db.comentarios, usuario:db.usuario});
    },
    agregarProductos: function(req, res, next) {
        res.render('product-add',  {title: 'Agregar producto', item:listaDeProductos[req.params.id], comentarios:db.comentarios, usuario:db.usuario});
        },
    editarProductos: function(req, res, next) {
        res.render('product-edit',  {title: 'Editar producto', item:listaDeProductos[req.params.id], comentarios:db.comentarios, usuario:db.usuario});
        },
    

}

module.exports= productController;

