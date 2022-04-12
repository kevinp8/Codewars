function solution(string) {
    let word = ''
    let wordsArr = []
    for (let i=0; i<string.length; i++) {
      if (string[i] == string[i].toUpperCase()) {
        wordsArr.push(word)
        word = string[i]
      } else {
        word += string[i]
        if (i == string.length-1) {
          wordsArr.push(word)
        }
        
      }
    }
  return wordsArr.join(' ')
}