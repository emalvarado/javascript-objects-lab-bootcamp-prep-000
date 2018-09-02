var recipes = {chocolate: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = deleteFromObjectByKey(object, key)
  delete newObj.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
}