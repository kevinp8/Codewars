function simpleTransposition(text) {
  let letters = text.split('')
  let first = ''
  let second = ''
  let fOrS = true
  while (letters.length>0) {
    if (fOrS) {
      first += letters.shift()
      fOrS = !fOrS
    }
    else {
      second += letters.shift()
      fOrS = !fOrS
    }
  }
  return first+second
}