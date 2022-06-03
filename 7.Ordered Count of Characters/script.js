var orderedCount = function (text) {
    let arr = []
    let smolArr = []
    let done = []
    text.split('').forEach((char, index) => {
      if (!done.includes(char)){
        smolArr.push(char)
        let count = 1
        for (let i=0; i<text.length; i++) {
          if (i != index) {
            if (text[i] == char) count++
          }
        }
        smolArr.push(count)
        arr.push(smolArr)}
      done.push(char)
      smolArr = []
    })
    return arr
  }