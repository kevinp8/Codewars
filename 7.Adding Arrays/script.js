function arrAdder(arr) {
    let word =''
    let words = []
    for (let i=0; i<arr[0].length; i++) {
      for (let j=0; j<arr.length; j++) {
        word += arr[j][i]
      }
      words.push(word)
      word = ''
    }
    return words.join(' ')
  }