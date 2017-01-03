module.exports = function (app) {
        app.get('/produtos', (request, response) => {
        response.render('produtos/lista');
    });
    return app;
}