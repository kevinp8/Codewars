function scrabbleScore(str){
  let score = 0
  str = str && str.toUpperCase().match(/[A-Z]/g)
  for (let i=0; i<str.length; i++){
    score += $dict[str[i]]
  }
  return score
}