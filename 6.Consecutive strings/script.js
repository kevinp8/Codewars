function longestConsec(strarr, k) {
    let wordArr = []
    let word = ''
      // index greater than or equal to length-k then continue
    for (let i=0; i<strarr.length; i++) {
      if (i > strarr.length-k == false) {
        for (let j=0; j<k; j++) {
          wordArr.push(strarr[i+j])
        }
        if (wordArr.join('').length > word.length) {
          word = wordArr.join('')
        }
        wordArr = []
      }
    }
    return word
  }