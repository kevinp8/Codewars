function completeSeries(arr) {
  if (arr.every(i => arr.indexOf(i) === arr.lastIndexOf(i))){
    let nums = []
    for (let i=0; i<= Math.max(...arr); i++) nums.push(i)
    return nums
  } else return [0]
}