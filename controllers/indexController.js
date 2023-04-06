var indexController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Mercado Liebre' });
    },
    productos: function(req, res, next) {
        res.render('product', { title: 'Producto' });
    },

    
}

module.exports = indexController;

