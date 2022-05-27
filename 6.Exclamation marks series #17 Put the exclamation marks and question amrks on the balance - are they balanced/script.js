function balance(left,right){
  let lScore = left.split('').reduce((init, i) => i == '!' ? init + 2 : i == '?' ? init+3 : init, 0)
  let rScore = right.split('').reduce((init, i) => i == '!' ? init + 2 : i == '?' ? init+3 : init, 0)
  return lScore > rScore ? 'Left' : lScore == rScore ? 'Balance' : 'Right'
}