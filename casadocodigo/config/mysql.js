module.exports = function () {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '200459',
        database: 'cdc_nodejs'
    });

    return connection;
}