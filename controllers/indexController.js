var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;

var indexController = {
    index: function(req, res, next) {
        console.log(req.session)
        res.render('index', { title: 'La Odisea', lista:listaDeProductos});
    },
    resultados: function(req, res, next) {
        res.render('search-results', { title: 'Resultados de busqueda',lista:[listaDeProductos[0]], usuario:db.usuario, productoBuscado: req.query.search});
    },
    

    
}


module.exports = indexController;

