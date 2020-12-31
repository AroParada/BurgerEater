const express = require('express');

var PORT = process.env.PORT || 8080;
var app = express();

// Enable the app-wide scout middleware

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function () {
  console.log('Server Listening on: http://localhost:' + PORT);
});