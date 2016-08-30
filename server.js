var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var fs = require('fs')
var Promise = require('bluebird')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express()
var router = require('./router')
var publicPath = path.resolve(__dirname, 'public')
var CronJob = require('cron').CronJob
var asyncLoop = require('./csv_import').asyncLoop


var config = require('./config')

app.use(bodyParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(publicPath))

router(app)
//connect to heroku
var db = config.dbURI2

mongoose.connect(db)


var Xray = require('x-ray')
var xray = Xray()
var publicPath = path.resolve(__dirname, 'public')
var districts = require(__dirname, '/districts.js')
var fetch = require('isomorphic-fetch')
var polyfill = require('babel-polyfill')

//cronjob runs every day at 9am Pacific Time

new CronJob('00 00 09 * * *', () => {
  // Collects bills to be debated before House and Senate and send them to the database
  collectBills('https://www.govtrack.us/api/v2/bill?sort=-introduced_date&bill_type=house_bill', congressBill)
  collectBills('https://www.govtrack.us/api/v2/bill?sort=-introduced_date&bill_type=senate_bill', senateBill)
  // Add any other data collecting functions we want automated here

}, true, 'America/Los_Angeles')




