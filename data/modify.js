var fs = require('fs')
var csvImport = require('../csv_import')
//
fs.readFile('./Candidate_Summary2016.json', 'utf-8', function(err, data){
  data = JSON.parse(data)
  data = csvImport.mixedDataCleaner(data)
  fs.writeFile('./Can_Summary2016.json', JSON.stringify(data))
})