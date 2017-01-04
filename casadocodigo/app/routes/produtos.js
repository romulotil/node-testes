module.exports = function (app) {
    app.get('/produtos', (request, response) => {
        var connection = app.infra.connectionFactory();
        
        connection.query('select * from livros', function (erro, resultado) {
            console.log(resultado);

            response.render('produtos/lista', {
                lista: resultado
            });
        });
        
        connection.end();
    });

    return app;
}