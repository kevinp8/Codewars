function ballCollector(detritus) {
  let sack = {weight: 0}
  detritus.forEach((i) => {
    if(i === 58) sack.weight += i
  })
  return sack
}