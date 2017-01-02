var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
});
app.get('/produtos', (request, response) => {
    response.render('produtos/lista');
});

app.listen(1337, () => {
});