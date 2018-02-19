var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('calendar')})
app.get('/calendar', function (req, res){res.render('calendar')})



app.get('/chart', function (req, res){res.render('chart')})
app.get('/test', function (req, res){res.render('test')})

app.listen(3200, function () {
  console.log('App listening on port 3200!')
})