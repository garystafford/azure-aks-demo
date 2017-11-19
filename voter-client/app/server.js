// Start app in Production Docker container
// using 'serve-static' - command 'node server.js'
// https://www.npmjs.com/package/serve-static#serving-using-express

var express = require('express');
var serveStatic = require('serve-static');
var port = process.env.PORT || 8080;
var app = express();

app.use(serveStatic(__dirname, {'index': ['index.html']}));
console.log('Listening on port: ' + port);
app.listen(port);
