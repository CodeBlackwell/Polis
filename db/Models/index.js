var Sequelize = require('sequelize')

var sequelize = new Sequelize('Polis', 'root', 'Dreamwork21', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

var models = [
  'Contribution',
  'Legislator',
  'CandidateSummary'
]

models.forEach(function(model){
  module.exports[model] = sequelize.import(__dirname + '/' + model)
})


sequelize.sync().then(function(){
  console.log('sync complete')
}) 

module.exports.sequelize = sequelize