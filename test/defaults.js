const tap = require('tap')
const extractor = require('../')

tap.test("returns empty array when there are no matches", function (t) {
  t.deepEquals( [], extractor.extract("body{background:red}") )

  t.end();
})
