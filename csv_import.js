var Converter = require('csvtojson').Converter
var converter = new Converter({})


module.exports = {

  converter: converter,

  asyncLoop: function(iterations, func, callback){
    var index = 0
    var done = false
    var loop = {
      next: function() {
        if (done) {
          return
        }

        if (index < iterations) {
          index++
          func(loop)
   
        } else {
          done = true
          callback()
        }
      },

      iteration: function() {
        return index - 1
      },

      break: function() {
        done = true
        callback()
      }
    }
    loop.next()
    return loop
  },

  validateNumber: function(aString) {
    var results = aString.replace(/(\D)/g, '0')
    return results
  },

// /*
// * Converts integer strings containing ',' and '$' into integers.
// **/
  mixedDataCleaner: function(arrayOfObjects) {
    const parseCurrency = (aString) => {
      var convert = aString.replace(/\$/g, '')
      convert = convert.replace(/\,/g, '')
      convert = Number(convert)
      return convert
    }
  

    for(var i = 0; i < arrayOfObjects.length; i++) {
    //For an Array containing arrays
      if(Array.isArray(arrayOfObjects[i])) {
        for(var q = 0; q < arrayOfObjects[i].length; q++){
          if(arrayOfObjects[i][q]){
            arrayOfObjects[i][q] = parseCurrency(arrayOfObjects[i][q])       
          }
        }      
      } else {
    //For an Array containing Objects (JSON)
        for(var j in arrayOfObjects[i]){
          if( arrayOfObjects[i][j][0] === '$' || arrayOfObjects[i][j][0] === '-' ) {
            arrayOfObjects[i][j] = parseCurrency(arrayOfObjects[i][j])
          }
        }
      }
    }
    return arrayOfObjects
  },
  //Generate Layered Data. This is specifically used with Stacked Bar Graph
  generateLayers: function(arrayOfArrays) {
    var layers = []
    for(var i = 0; i < arrayOfArrays.length; i++) {
      var candidate = []
      for(var q = 0; q < arrayOfArrays[i].length; q++) {
        candidate.push({ x: q, y: arrayOfArrays[i][q] })
      }
      layers.push(candidate)
    }
    return layers
  },
  /*
* Parses Object data for integers. Removes ',' or '%' then uses
* the JSON.parse() to parse the integers. 
**/
  numericDataCleaner: function(arrayOfObjects) {

    function parseNumbers(numberString) {
      var myKicksGameIs = JSON.stringify(numberString),
          justRude = myKicksGameIs.replace(/\,/g, ''),
          dontGet = JSON.parse(justRude),
          jiujitsued = JSON.parse(dontGet)
          return jiujitsued
    }
    function parsePercentage(numberString){
      var soySauce = JSON.stringify(numberString),
          wasabi = soySauce.replace(/\%/g, ''),
          seaweed = JSON.parse(wasabi),
          sushi = JSON.parse(seaweed)
          return sushi
    }

    for(var i = 0; i < arrayOfObjects.length; i++){
      for(var q in arrayOfObjects[i]) {
        var currentJSON = arrayOfObjects[i];

          //remove all '%'
        if(currentJSON[q][currentJSON[q].length - 1] === '%'){
          currentJSON[q] = parsePercentage(currentJSON[q]);
        }
          //remove all ',' 
        else if (!isNaN(Number(currentJSON[q][currentJSON[q].length - 1]))) {
          currentJSON[q] = parseNumbers(currentJSON[q]);
        }
      }
    }
    return arrayOfObjects;
  },
  collectBills: function (uri, model) {
    fetch(uri, function(req, res) {
    }).then(function(res) {
      //console.log('*********************\n\n\n\n\response from housebills \n\n\n\n\n\n********************', res.json())
      return res.json()
    }).then( function(houseBill){
      
      var i = 0
      var iterations = houseBill.objects.length
      var skippedBills = []

      asyncLoop(iterations, function(loop) {
        console.log('loop.iteration()', loop.iteration())
        const bill = new model()
        bill.billNumber = houseBill.objects[i].display_number
        bill.billName = houseBill.objects[i].title_without_number
        bill.fullTextLink = houseBill.objects[i].thomas_link
        bill.terms = houseBill.objects[i].terms
        bill.statusDescription = houseBill.objects[i].current_status_label
        bill.sponsor = houseBill.objects[i].sponsor.name

        bill.save(function(err, success) {
          if (err) {
            console.warn(loop.iteration(), ' bill data was skipped! ', err)
            skippedBills.push({
              index: i,
              error: err
            })
            if (i < iterations) {
              i++
              loop.next()
            } else {
              loop.next()
            }
          } else {
            if (i < iterations) {
              i++
              console.log('iteration ', loop.iteration(), ' bill has been saved')
              loop.next()
            }
          }
        })
      },
      function() {
        console.log('Bills have finished uploading. The following bills were skipped', skippedBills)
      })
    })
  }



} 
