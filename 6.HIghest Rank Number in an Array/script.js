function highestRank(arr){
  let counts = arr.reduce((init, num) => {
    if (num in init) {
      init[num]++
      return init
    }
    else {
      init[num] = 1
      return init
    }
  },{})
  let highest = [0,0]
  for (let num in counts) {
    if (counts[num] > highest[1]) highest = [num, counts[num]]
    if (counts[num] === highest[1] && num > highest[0]) highest = [num, counts[num]]
  }
  return parseInt(highest[0])
}