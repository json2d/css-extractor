const tap = require('tap')
const extractor = require('../')

const fs = require('fs')
const path = require('path')

const fPath = path.resolve(__dirname, 'fixtures')

const expected = require(fPath+'/expected.json')

const fExt = '.css'

// ⚠️ dynamically indexing .css fixtures to be tested
var fNames = fs.readdirSync(fPath)
  .filter((n)=> n.endsWith(fExt))
  .map((n) => n.slice(0,n.length-fExt.length))

//var fNames = ['basic','media','complex','comments'];

var fixtures = fNames.map((name)=> {
  var css = fs.readFileSync(fPath+'/'+name+fExt, 'utf8');
  var expect = expected[name]
  return {name,css,expect}
})


tap.test("extracts all unique ids and classes", function (t) {
  fixtures.forEach((fixture) => {
    var defs = extractor.extract(fixture.css)
    t.deepEqual(fixture.expect.sort(), defs.sort(),'extracting from '+fixture.name+'.css')
  })

  t.end()
})
