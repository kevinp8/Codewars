function explode(s) {
    let exploded = ''
    for (const i of s) {
      for (let j=0; j<Number(i); j++) {
        exploded += i
      }
    }
    return exploded
  }