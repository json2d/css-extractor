# css-extractor
:gem: extracts class names and ids from CSS

### Installing
```
$ npm install css-extractor
```

### Basic Usage
```javascript
var extractor = require('css-extractor');

var css = "#id, .class { color:#000 }";

extractor.extract(css);
// => ['#id','.class']
```
`extract` will return an array of all unique class names and ids

### Approach
This module was designed to be lightweight, with no dependencies, using `RegExp` patterns to trim the input CSS content and capture the class names and ids.

### Testing
Tests are performed using the `tap` testing framework.  To run:
```
$ npm install
$ npm test
```

The main focus of the test cases is to ensure compatibility with common and uncommon syntactic features and liberties available in CSS, including:

* `@media` queries
* attribute selectors: `#id[href='#id-like']`
* arbitrary and non-mandatory spacing
* comment blocks

For more on such cases, check out the `.css` files in `test\fixtures`
