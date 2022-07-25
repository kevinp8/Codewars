function wordValue(a) {
  return a.map((word, index) => {
     return word.split('').reduce((init, letter) => {
      if (letter == ' ') return init
      else return init + letter.charCodeAt(letter)-96
    },0) * (index+1)
  })
}