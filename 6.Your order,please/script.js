function order(words){
    let arr = []
    for (const i of words.split(' ')) {
      arr.push('')
    }
    for (const i of words.split(' ')) {
      for (const j of i) {
        if (isNaN(j) == false) {
          arr[j-1] = i
        }
      }
    }
    return arr.join(' ')
  }