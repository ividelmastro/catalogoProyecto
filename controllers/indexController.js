var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;

var indexController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Mercado Liebre', lista:listaDeProductos });
    },
    productos: function(req, res, next) {
        res.render('product', { title: 'Producto' });
    },
    resultados: function(req, res, next) {
        res.render('search-results', { title: 'Resultados de busqueda' });
    },
    

    
}


module.exports = indexController;

