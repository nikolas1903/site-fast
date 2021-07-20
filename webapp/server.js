const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')


var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))


app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)