function getStrings(city){
  let letters  = {}
  let lettersString = []
  city.toLowerCase().split('').forEach(letter => letter in letters ? letters[letter]++ : letter != ' ' ? letters[letter] = 1 : null)
  Object.keys(letters).forEach(letter => letters[letter] =  '*'.repeat(letters[letter]))
  Object.keys(letters).forEach(letter => lettersString.push(`${letter}:${letters[letter]}`))
  return lettersString.join(',')
}