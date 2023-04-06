var express = require('express');
var usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/registro',usersController.registro);

module.exports = router;

///Aca vamos a poner las paginas de registro, login, perfil y edicion de perfil