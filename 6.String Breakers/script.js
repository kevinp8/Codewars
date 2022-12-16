function stringBreakers(n, string){
  let word = ''
  let words = []
  let bigStr = string.split(' ').join('')
  for (let i=0; i<bigStr.length; i++){
    word += bigStr[i]
    if (word.length === n || i === bigStr.length-1){
      words.push(word)
      word = ''
    } 
  }
  return words.join('\n')
}
