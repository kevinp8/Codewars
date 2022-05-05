function towerBuilder(nFloors) {
  let numSpaces = nFloors-1
  let numStars = 1
  let floorArr = []
  for (let i=0; i<nFloors; i++) {
    floorArr.push(' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces))
    numStars+=2
    numSpaces--
  }
  return floorArr
}