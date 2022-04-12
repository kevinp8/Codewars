function findChildren(dancingBrigade){
    let upperArr = dancingBrigade.split('').filter(i => i == i.toUpperCase()).sort()
    let lowerArr = dancingBrigade.split('').filter(i => i == i.toLowerCase())
    let sorted = ''
    console.log(upperArr)
    console.log(lowerArr)
    for (const i of upperArr) {
      sorted += i
      for (const j of lowerArr) {
        if (j == i.toLowerCase()) {
          sorted += j
        }
      }
    }
    return sorted
  };