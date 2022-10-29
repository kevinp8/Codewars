function wordPattern(word) {
  let letters = {}
  let code = 0
  let pattern = []
  for (let i=0; i<word.length; i++) {
    if (word[i].toLowerCase() in letters) pattern.push(letters[word[i].toLowerCase()])
    else {
      letters[word[i].toLowerCase()] = code
      code++
      pattern.push(letters[word[i].toLowerCase()])
    }
  }
  return pattern.join('.')
}