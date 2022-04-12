function XO(str) {
    let xs = 0
    let os = 0
    str.toLowerCase().split('').forEach(i => {
      if (i == 'x') {xs++}
      if (i=='o') {os++}
    })
    if (xs == os) {
      return true
    } else {return false}
}