
var mysql = require('mysql');

function createConnection () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '200459',
        database: 'cdc_nodejs'
    });

    return connection;
}

module.exports = function() {
    return createConnection;
}