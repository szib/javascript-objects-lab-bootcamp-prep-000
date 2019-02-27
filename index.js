var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var o = Object.assign(obj, {[key]:value})
  return o
}