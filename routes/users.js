var express = require('express');
var usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/register',usersController.register);
router.get('/profile',usersController.profile);
router.get('/login',usersController.login);
router.get('/profile-edit',usersController.profileEdit);

/* POST */
router.post('/register', usersController.create);
router.post('/login', usersController.signIn)
module.exports = router;

