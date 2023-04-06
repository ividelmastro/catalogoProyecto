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
    
    
}
module.exports= usersController;
