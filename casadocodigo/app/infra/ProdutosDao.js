function ProdutosDao(connection) {
    this._dbConn = connection;
}

ProdutosDao.prototype.lista = function(callback) {
    this._dbConn.query('select * from livros', callback);
}

module.exports = function() {
    return ProdutosDao;
}