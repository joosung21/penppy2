var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('dashboard')})
app.get('/login', function (req, res){res.render('login')})
app.get('/reservation-list', function (req, res){res.render('reservation-list')})
app.get('/room-block', function (req, res){res.render('room-block')})
app.get('/calendar', function (req, res){res.render('calendar')})
app.get('/calendar-chart', function (req, res){res.render('calendar-chart')})
app.get('/calendar-week', function (req, res){res.render('calendar-week')})
app.get('/rateplan', function (req, res){res.render('rateplan')})
app.get('/chart', function (req, res){res.render('chart')})
app.get('/report', function (req, res){res.render('report')})
app.get('/season-year-calendar', function (req, res){res.render('season-year-calendar')})
app.get('/payment', function (req, res){res.render('payment')})
app.get('/revenue', function (req, res){res.render('revenue')})
app.get('/agreement', function (req, res){res.render('agreement')})
app.get('/notice', function (req, res){res.render('notice')})
app.get('/notice-view', function (req, res){res.render('notice-view')})

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
app.get('/setting/auto', function (req, res){res.render('setting-auto')})
app.get('/setting/auto-edit', function (req, res){res.render('setting-auto-edit')})
app.get('/setting/multiday', function (req, res){res.render('setting-multiday')})
app.get('/setting/multiday-edit', function (req, res){res.render('setting-multiday-edit')})

// 모바일 BP
app.get('/bp-mobile', function (req, res){res.render('bp-mobile')})
app.get('/bp-mobile-book', function (req, res){res.render('bp-mobile-book')})

// PC BP
app.get('/bp-pc', function (req, res){res.render('bp-pc')})
app.get('/bp-pc-book', function (req, res){res.render('bp-pc-book')})

// Error Pages
app.get('/maintnence', function (req, res){res.render('maintnence')})
app.get('*', function (req, res){res.render('404')})


app.listen(3200, function () {
  console.log('App listening on port 3200!')
})