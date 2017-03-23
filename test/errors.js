const tap = require('tap')
const extractor = require('../')

tap.test("throws error for arg with incorrect type", function (t) {
  t.throws(()=> extractor.extract() )
  t.doesNotThrow(() => extractor.extract("this is not a really css") )

  t.end();
})
