function nthSmallest(...arrs) {
  let combinedArr = []
  for (let i=0; i<arrs.length-1;i++) {
    for (let j of arrs[i]) {
      combinedArr.push(j)
    }
  }
  combinedArr = combinedArr.sort((a,b) => a-b)
  return combinedArr[arrs[arrs.length-1]-1]
}