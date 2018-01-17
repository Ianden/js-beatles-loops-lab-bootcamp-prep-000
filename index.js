function theBeatlesPlay(musicians, instruments) {
  var descriptions = new Array([])
  for (var i = 0; i < musicians.length; i++) {
    descriptions.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return descriptions
}

