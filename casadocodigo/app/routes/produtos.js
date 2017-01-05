module.exports = function (app) {
    app.get('/produtos', (request, response) => {
        var connection = new app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDao(connection);
        
        produtosBanco.lista(function (erro, resultado) {
            response.render('produtos/lista', {
                lista: resultado
            });
        });
        
        connection.end();
    });

    return app;
}