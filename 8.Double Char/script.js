function doubleChar(str) {
    let double = ''
    for (const i of str) {
      double += i+i
    }
    return double
  }