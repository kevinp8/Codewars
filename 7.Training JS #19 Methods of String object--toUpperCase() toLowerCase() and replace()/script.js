function alienLanguage(str){
  let words = str.split(' ')
  words = words.map(word => {
    return word.slice(0, word.length-1).toUpperCase() + word[word.length-1].toLowerCase()
  })
  return words.join(' ')
  
}