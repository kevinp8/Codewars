var splitInParts = function(s, partLength){
  let words = []
  let word = ''
  s.split('').forEach(i =>{
    word += i
    if (word.length==partLength) {
      words.push(word)
      word = ''
    }
  })
  if (word) words.push(word)
  return words.join(' ')
}