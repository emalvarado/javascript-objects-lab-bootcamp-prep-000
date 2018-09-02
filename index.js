var recipes = {chocolate: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]:value})
}

