const dbOrm = require("../database/models");
const users = dbOrm.User;
const products = dbOrm.Product;
const comments = dbOrm.Comment;

var productController = {
  item: function (req, res, next) {
    products
      .findByPk(req.params.id, {
        include: [
          { association: "user" },
          {
            association: "comments",
            include: [
              {
                association: "user",
              },
            ],
          },
        ],
      })

      .then((producto) => {
        console.log(producto);
        return res.render("product", {
          title: "Product",
          item: producto,
        });
      })
      .catch((error) => {
        console.log(error);
        return res.send(error);
      });
  },
  agregarProductos: function (req, res, next) {
    res.render("product-add", {
      title: "Agregar producto",
    });
  },
  editarProductos: function (req, res, next) {
    products
      .findByPk(req.params.id, {
        include: [
          { association: "user" },
          {
            association: "comments",
            include: [
              {
                association: "user",
              },
            ],
          },
        ],
      })
      .then((producto) => {
        if (req.session.user.id === producto.user.id) {
          return res.render("product-edit", {
            title: "Editar Producto",
            item: producto,
          });
        } else {
          return res.redirect("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        return res.send(error);
      });
  },
  create: function (req, res) {
    //console.log(req.session)
    let producto = {
      userId: req.session.user.id,
      nameProduct: req.body.producto,
      description: req.body.descripcion,
      photoProduct: req.file.filename,
    };

    products
      .create(producto)

      .then(function () {
        return res.redirect("/");
      })
      .catch((error) => console.log(error));
  },
  update: function (req, res) {
    let producto = {
      userId: req.session.user.id,
      nameProduct: req.body.producto,
      description: req.body.descripcion,
      photoProduct: req.file.filename,
    };

    products
      .update(
        {
          userId: req.session.user.id,
          nameProduct: req.body.producto,
          description: req.body.descripcion,
          photoProduct: req.file.filename,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(function () {
        return res.redirect("/products/item/" + req.params.id);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error);
      });
  },
  delete: function (req, res) {
    products
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(function () {
        return res.redirect("/");
      })
      .catch(function (error) {
        res.send(error);
      });
  },
  comment: function (req, res) {
    if (req.session.user == undefined) {
      res.redirect("/users/login");
    }

    let comentario = {
      textComment: req.body.textComment,
      productId: req.params.id,
      userId: req.session.user.id,
    };

    comments
      .create(comentario)
      .then(function () {
        return res.redirect("/products/item/" + req.params.id);
      })
      .catch((error) => console.log(error));
  },
};

module.exports = productController;
