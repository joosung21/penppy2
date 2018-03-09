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
app.get('/rateplan', function (req, res){res.render('rateplan')})
app.get('/chart', function (req, res){res.render('chart')})
app.get('/season-year-calendar', function (req, res){res.render('season-year-calendar')})

// 업체설정
app.get('/setting', function (req, res){res.render('setting-basic')})
app.get('/setting/basic', function (req, res){res.render('setting-basic')})
app.get('/setting/property', function (req, res){res.render('setting-property')})
app.get('/setting/rooms', function (req, res){res.render('setting-rooms')})
app.get('/setting/rooms/edit', function (req, res){res.render('setting-room-edit')})
app.get('/setting/service', function (req, res){res.render('setting-service')})
app.get('/setting/service/edit', function (req, res){res.render('setting-service-edit')})
app.get('/setting/daily', function (req, res){res.render('setting-daily')})
app.get('/setting/sms', function (req, res){res.render('setting-sms')})
app.get('/setting/policy', function (req, res){res.render('setting-policy')})
app.get('/setting/bp', function (req, res){res.render('setting-bp')})
app.get('/setting/url', function (req, res){res.render('setting-url')})
app.get('/setting/notice', function (req, res){res.render('setting-notice')})
app.get('/setting/notice/edit', function (req, res){res.render('setting-notice-edit')})
app.get('/setting/gds', function (req, res){res.render('setting-gds')})
app.get('/setting/gds-status', function (req, res){res.render('setting-gds-status')})

// 모바일 BP
app.get('/bp-mobile', function (req, res){res.render('bp-mobile')})
app.get('/bp-mobile-book', function (req, res){res.render('bp-mobile-book')})


app.listen(3200, function () {
  console.log('App listening on port 3200!')
})