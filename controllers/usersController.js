var usersController ={
    register: function(req, res, next) {
        res.render("register");
      },
    profile: function(req, res, next) {
        res.render("profile");
      },
    login: function(req, res, next) {
        res.render("login");
      },
    profileEdit: function(req, res, next) {
        res.render("profile-edit");
      },
    agregarProductos: function(req, res, next) {
      res.render('product-add', { title: 'Agregar productos' });
      },
    
    
}
module.exports= usersController;
