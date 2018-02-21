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
app.get('/calendar-week', function (req, res){res.render('calendar-week')})

// 업체설정
app.get('/setting/property', function (req, res){res.render('setting-property')})
app.get('/setting/rooms', function (req, res){res.render('setting-rooms')})
app.get('/setting/rooms/edit', function (req, res){res.render('setting-room-edit')})
app.get('/setting/service', function (req, res){res.render('setting-service')})
app.get('/setting/service/edit', function (req, res){res.render('setting-service-edit')})
app.get('/setting/daily', function (req, res){res.render('setting-daily')})

//-- Temporary Pages
app.get('/test', function (req, res){res.render('test')})

app.listen(3200, function () {
  console.log('App listening on port 3200!')
})