function alphabetPosition(text) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
    let nums = []
    for (const i of text) {
      for (const j of alpha) {
        if (i.toLowerCase()==j) {
          nums.push(alpha.indexOf(j)+1)
        }
      }
    }
    return nums.join(' ')
  }