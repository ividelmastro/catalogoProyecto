var express = require('express');
var productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */

router.get('/item/:id', productController.productos);
router.get('/product-add', productController.agregarProductos);
router.get('/product-edit', productController.editarProductos);



module.exports = router;


///Paginas de producto, agregar productor, buscar resultados, error