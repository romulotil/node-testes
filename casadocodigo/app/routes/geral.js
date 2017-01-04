var rotaProdutos = require('./produtos');

module.exports = function (app) {
    app.get('/', (request, response) => {
        response.render('index');
    });
    
    rotaProdutos(app);

    return app;
}