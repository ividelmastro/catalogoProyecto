var express = require('express');
var usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/register',usersController.register);
router.get('/profile',usersController.profile);
router.get('/login',usersController.login);
router.get('/profile-edit',usersController.profileEdit);
router.get('/product-add', usersController.agregarProductos);

module.exports = router;

///Aca vamos a poner las paginas de registro, login, perfil y edicion de perfil