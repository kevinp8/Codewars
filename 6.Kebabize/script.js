function kebabize(str) {
  let words = []
  let aWord = ''
  str.split('').forEach(char => {
    if (!isNaN(char)) {} 
    else if (char === char.toUpperCase()) {
      words.push(aWord)
      aWord = ''
      aWord += char.toLowerCase()
    } else aWord += char
  })
  words.push(aWord)
  if (words[0] === '') words.shift()
  return words.join('-')
}