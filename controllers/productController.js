var productController = {
    
    productos: function(req, res, next) {
        res.render('product', {title: 'Producto' ,item:listaDeProductos[req.params.id],  comentarios:db.comentarios, usuario:db.usuario});
    },
    productos: function(req, res, next) {
        res.render('product',{item: listaDeProductos[req.params.id], comentarios: db.comentarios, usuario});
      },

