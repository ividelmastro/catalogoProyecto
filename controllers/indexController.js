var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;

var indexController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Mercado Liebre', lista:listaDeProductos});
    },
    resultados: function(req, res, next) {
        res.render('search-results', { title: 'Resultados de busqueda' });
    },
    

    
}


module.exports = indexController;

