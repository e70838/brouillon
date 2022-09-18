//Load HTTP module
const fs = require('fs');
const path     = require('path');
const express  = require('express');
const favicon  = require('serve-favicon');


var app = express();
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))

// https://pugjs.org/api/getting-started.html
app.set('view engine', 'pug');
app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'static')));

// app.use('/sante', express.static(path.join(__dirname, 'public', 'sante')),
//   serveIndex('public/sante', { 'icons': true }));

// app.get('/', function (req, res) {
//   console.log('/');
//   res.render('index');
// });

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
app.listen(port);
