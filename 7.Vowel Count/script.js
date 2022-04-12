function getCount(str) {
    let num = 0
    str.split('').forEach(i => {
      if (['a', 'e', 'i', 'o', 'u'].includes(i)) num++
    })
    return num
  }