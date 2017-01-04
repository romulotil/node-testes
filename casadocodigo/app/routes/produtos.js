module.exports = function (app) {
    app.get('/produtos', (request, response) => {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '200459',
            database: 'cdc_nodejs'
        });
        
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