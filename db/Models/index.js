var Sequelize = require('sequelize')

var sequelize = new Sequelize('Polis', 'tonywinglau', 'hongkong97', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

var modelNames = [
  'Contribution',
  'Legislator',
  'CandidateSummary'
]

var models = {}

modelNames.forEach(function(name){
  models[name] = sequelize.import(__dirname + '/' + name)
})

models.Contribution.belongsTo(models.Legislator, { foreignKey: { allowNull: false } })
models.Contribution.belongsTo(models.CandidateSummary, { foreignKey: { allowNull: false } })
models.CandidateSummary.belongsTo(models.Legislator, { foreignKey: { allowNull: false } })
models.CandidateSummary.hasMany(models.Contribution)
models.Legislator.hasMany(models.Contribution)
models.Legislator.hasMany(models.CandidateSummary)

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.')
    sequelize.sync({ force: true }).then(function(){
      console.log('sync')
    }) 
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err)
  })



module.exports = models
module.exports.sequelize = sequelize