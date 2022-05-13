function presses(phrase) {
  let code = [
    ['A', 'B', 'C', '2'],
    ['D', 'E', 'F', '3'],
    ['G', 'H', 'I', '4'],
    ['J', 'K', 'L', '5'],
    ['M', 'N', 'O', '6'],
    ['P', 'Q', 'R', 'S', '7'],
    ['T', 'U', 'V', '8'],
    ['W', 'X', 'Y', 'Z', '9'],
    [' ', '0'], ['1']
  ]
  return phrase.toUpperCase().split('').reduce((init, char) => {
    for (let group of code) {
      if (group.includes(char)) {
        init += group.indexOf(char)+1
      }
    }
    return init
  }, 0)
}
