"use-strict"

const DEFINITIONS_CAP = /([#.][\w-]+)/g;
const TRIM = {
  comments: /\/\*[\s\S]*?\*\//g,
  media: /@media[\s]*\([^\{]+\{/g,
  defs: /\{[^\}]*?\}/g,
  // scope: /\([\s\S]*?\)/g
  attr: /\[[\s\S]*?\]/g
}


var extract = (css) => {

	if(typeof css != "string") {
		throw new Error("Argument must be a string")
	}
  // trim down css for regex capturing, attempting to remove everything but the defs
  Object.keys(TRIM).forEach((matcher) => {
		css = css.replace(TRIM[matcher], '')
	})

  var defArr = [];
  var match = DEFINITIONS_CAP.exec(css);
  while (match != null) {
    let def = match[1]; // ⚠️ pulls matched string out of regex match ojbect
    if (defArr.indexOf(def) == -1)
      defArr.push(match[1]);
    match = DEFINITIONS_CAP.exec(css); // continue matching
  }
  return defArr
}

module.exports = {extract}
