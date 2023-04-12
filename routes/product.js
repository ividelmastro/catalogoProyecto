var express = require('express');
var productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */

router.get('/:id', productController.productos);
router.get('/product-add', productController.agregarProductos);



module.exports = router;


///Paginas de producto, agregar productor, buscar resultados, error