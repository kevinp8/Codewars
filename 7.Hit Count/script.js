function counterEffect(hitCount) {
  let bigArr = []
  let lilArr = []
  hitCount.split('').forEach(i => {
    for (let j=0; j<=Number(i); j++) {
      lilArr.push(j)
    }
    bigArr.push(lilArr)
    lilArr = []
  })
  return bigArr
}