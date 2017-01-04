var express = require('express')();
var load = require('express-load');

module.exports = function () {
    express.set('view engine', 'ejs');
    express.set('views', './app/views');

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(express);

    return express;
}