var express = require('express');
var productController = require('../controllers/productController');
var router = express.Router();
const multer = require('multer');
const path = require ('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products')) 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
var upload = multer({ storage: storage })

/* GET home page. */

router.get('/item/:id', productController.productos);
router.get('/product-add', productController.agregarProductos);
router.get('/product-edit/:id', productController.editarProductos);

router.post ('/product-add', upload.single('imagen'), productController.create);
router.post('/product-edit/:id', upload.single('imagen'), productController.update);
router.post('/product-delete/:id', productController.delete);

module.exports = router;


///Paginas de producto, agregar productor, buscar resultados, error