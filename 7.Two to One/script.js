function longest(s1, s2) {
    let letters = []
    for (const i of s1) {
      if (!letters.includes(i)) {
        letters.push(i)}
    }
    for (const i of s2) {
      if (!letters.includes(i)) {
        letters.push(i)}
    }
    letters.sort()
    return letters.join('')
  }