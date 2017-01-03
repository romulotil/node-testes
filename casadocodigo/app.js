var app = require('./config/express')();
require('./app/routes/geral')(app);

app.listen(1337, () => {
});