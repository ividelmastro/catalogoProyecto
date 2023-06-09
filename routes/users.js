var express = require('express');
var usersController = require('../controllers/usersController');
var router = express.Router();
const multer = require('multer');
const path = require ('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users')) 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
var upload = multer({ storage: storage })



/* GET users listing. */
router.get('/register',usersController.register);
router.get('/profile/:id',usersController.profile); // para que cada usuario tenga su ruta
router.get('/login',usersController.login);
router.get('/profile-edit',usersController.profileEdit);


/* POST */
router.post('/register', upload.single('profilePhoto'), usersController.create);
router.post('/login', usersController.signIn)
router.post('/logout', usersController.logout);
router.post('/profile-edit', upload.single('profilePhoto'), usersController.update);
module.exports = router;

