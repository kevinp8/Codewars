function accum(s) {
    const arr = []
    let word =''
    for (let i=0; i<s.length;i++){
      for (let j=0; j<i+1; j++) {
        if (word.includes(s[i].toUpperCase())) {
          word += s[i].toLowerCase()
        } else {
          word += s[i].toUpperCase()
        }
      }
      arr.push(word)
      word = ''
    }
    return arr.join('-')
  }