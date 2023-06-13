var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;
const dbOrm = require('../database/models');
const users = dbOrm.User;
const products = dbOrm.Product;
const comments = dbOrm.Comment;

var indexController = {
    index: function(req, res, next) {
        products.findAll( 
           
        {
            order: [[ "createdAt" , "DESC"]]
        })
          .then(function(results){
            console.log(results);
              return res.render('index', {title: 'La Odisea', lista : results})
           })
         .catch(function(error){
             console.log(error)
        })
    },
    resultados: function(req, res, next) {
        res.render('search-results', { title: 'Resultados de busqueda',lista:[listaDeProductos[0]], usuario:db.usuario, productoBuscado: req.query.search});
    },
    

    
}


module.exports = indexController;

