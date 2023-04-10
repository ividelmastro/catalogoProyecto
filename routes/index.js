var express = require('express');
var indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

router.get('/productos/:id', indexController.productos);


router.get('/resultados', indexController.resultados);


module.exports = router;


///Paginas de producto, agregar productor, buscar resultados, error