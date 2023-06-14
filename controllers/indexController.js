var db = require("../db/productos");
var listaDeProductos = db.listaDeProductos;
const dbOrm = require('../database/models');
const users = dbOrm.User;
const products = dbOrm.Product;
const comments = dbOrm.Comment;
const op = dbOrm.Sequelize.Op;

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
        let busqueda = req.query.search;
        let condicion = {
            where :{
             [op.or]: [
               { nameProduct: { [op.like]: `%${ busqueda}%` } },
               { description: { [op.like]: `%${ busqueda}%` } }
             ]
           }, 
            include: [ { association: 'user' }]
           }
      
        products.findAll(condicion)
        .then((results) => {

            
        return res.render('search-results', { title: 'Resultados de busqueda',lista: results, productoBuscado: busqueda});
    
        }).catch((err) => {
            console.log(err);
        });
        
    },
    

    
}


module.exports = indexController;

