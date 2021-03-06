
const Authentication = require('./db/controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')
var path = require('path')
var publicPath = path.resolve(__dirname, 'public')
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })
const jwt = require('jwt-simple')
const congressBill = require('./db/upcomingCongressionalVotes.model')
const senateBill = require('./db/UpcomingSenateBills.model')
const config = require('./config')
var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
})
var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3500
var moment = require('moment')
var asyncLoop = require('./csv_import').asyncLoop
var validateNumber = require('./csv_import').validateNumber


///////////////////////////////////////// Models
var User = require('./db/User.model')
var Zipcode = require('./db/Zipcode.model')
var CandidateSummary = require('./db/Candidate_Summary.model')
var Contribution = require('./db/Contribution.model')
var GE_Turnout = require('./db/Gen_Election_Voter_Turnout.model')
var LDR_PAC_Sponsor = require('./db/LDR_PAC_Sponsor.model')
var Administrative_Fine = require('./db/Administrative_Fine.model')
var UserOpinion = require('./db/UserOpinion.model')

//////////////////////////////////////////



module.exports = function(app) {
  
  app.listen(port, function () {
    console.log('Server running on port ' + port)
  })
  
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)

  //route to return the representative for the district based on the zipcode lookup
  app.get('/api/representatives/:zipcode', function(req, res) {
    var zipcode = req.params.zipcode
    var state
    Zipcode.find({ zipcode: zipcode}).exec(function(err, doc){
      state = doc[0].state
      var district = doc[0].district
      var url
      if (doc[1]) {
        url = 'https://www.govtrack.us/api/v2/role?current=true&district=' + district + '&district=' + doc[1].district + '&state=' + state
      } else {
        url = 'https://www.govtrack.us/api/v2/role?current=true&district=' + district + '&state=' + state
      }
      fetch(url)
    .then(function(rep) {
      return rep.json()
    }).then(function(val) {
      return val
    }).then(function(congressperson) {
      fetch('https://www.govtrack.us/api/v2/role?current=true&role_type=senator&state=' + state)
          .then(function(img) {
            return img.json()
          })
          .then(function(senator) {
            for (var i = congressperson.objects.length - 1; i >= 0; i--) {
              senator.objects.push(congressperson.objects[i])
            }
            res.send(senator)
          })
    })

    })  
  })
  
  
  app.get('/api/zipcode/:lat/:long', function(req, res) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + req.params.lat + ',' + req.params.long + ' &result_type=postal_code&key=' + config.GOOGLE_API_KEY)
      .then(response => response.json())
      .then(json => res.send(json))
  })

  app.get('/api/words/:rep', function(req, res) {
    fetch('http://capitolwords.org/api/1/phrases.json?entity_type=legislator&entity_value=' + req.params.rep + '&sort=count+desc&apikey=' + config.CAPITOL_API_KEY)
      .then(response => response.json())
      .then(json => res.send(json))
  })


// senate bills
  app.get('/api/data/senate_bills', (req, res) => {
    senateBill.find({}, (err, doc) => {
      if (err) {
        console.warn('error getting senate bills', err)
      }
      res.send(doc)
    })
  })

  // house bills
  app.get('/api/data/house_bills', (req, res) => {
    congressBill.find({}, (error, bill) => {
      if (error) {
        console.warn('error getting house bill', error)
      }
      res.send(bill)
    })
  })




///////////////////////////////////////////////////////////////// Queryable API


  //Retrieve all Candidate Summaries
  app.get('/api/data/CandidateSummary', function(req, res, next) {

    var data = CandidateSummary.find({})
    .exec( function(err, data){
      if (err) {
        res.send('an error occured fetching your data :(')
      } else {
        res.json(data)
      }
    })
  })

  //Retrieve a Candidate Summary based on zipcode and collectionYear
  app.get('/api/data/CandidateSummary/:zipcode/:collectionYear', function(req, res) {

    req.params.zipcode = validateNumber(req.params.zipcode)
    req.params.collectionYear = validateNumber(req.params.collectionYear)
      //@TODO: Update so 2016 is not hardcoded in
    console.log('Number(req.params.collectionYear): ', Number(req.params.collectionYear))
    if(Number(req.params.collectionYear) <= 2016 &&
        Number(req.params.collectionYear) >= 2000 &&
        req.params.zipcode.length === 5
        ) {

        var zipcode = req.params.zipcode
        var year = req.params.collectionYear


      //@TODO: Update
        Zipcode.find({ zipcode: zipcode }).exec(function(error, zipObject) {
        if (error) { console.log('error retrieving zipcode', error) }

        // var theYear = Date.parse('01/01/' + req.params.collectionYear);

        if (zipObject.length > 1) {
          var storage = []
          var iterations = zipObject.length
          var i = 0
          asyncLoop(iterations, function(loop) {
            //@TODO: recode candidate summary Query to not use hardcoded Date.parse() value
            CandidateSummary.find({ year_of_collection: year, can_off_sta: zipObject[i].state, can_off_dis: zipObject[i].district })
          .exec(function(err, docs) {
            if (err) {
              console.log(loop.iteration(), 'Candidate was skipped.', err)
              if (i < iterations) {
                i++
                loop.next()
              } else { 
                loop.next() 
              }
            } else {
              if (i < iterations) {
                i++
                console.log(loop.iteration(), 'Candidate has been sent')
                storage.push(docs)  
                loop.next()
              }
            }
          })
          }, function() { res.json(storage) })
        } else {
          if( zipObject[0] ){
            CandidateSummary.find({ year_of_collection: year, can_off_dis: zipObject[0].district, can_off_sta: zipObject[0].state})
            .exec(function(err, documents) {
              if (err) { 
                console.log('there was an error', err) 
              } else { 
                console.log('these are the documents from can_off', documents)
                res.json(documents) 
              }

            })
          } else {
            res.status(404).send('Invalid query')
          }
        }
      }) 

      } else {
        res.status(404).send('Invalid Year or Zipcode Entered')
      }
  })
  //if we're not in production, this proxies requests to localhost:3000 and sends them to our webpack server at localhost:8080
  if (!isProduction) {
    var bundle = require('./server/compiler.js')
    bundle()
    app.all('/build/*', function (req, res) {
      proxy.web(req, res, {
        target: 'http://localhost:8080'
      })
    })
  }

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...')
  })
  //catch all other get requests, such as when refreshing
  app.get('*', function(req, res) {
    res.sendFile(publicPath + '/index.html')
  })

}

// cronjob runs every day at 9am Pacific Time

