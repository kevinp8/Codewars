function avgArray(arr) {
  let avgs = []
  for (let i=0; i<arr[0].length; i++){
    avgs.push(0)
  }
  
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
      avgs[j] += arr[i][j]
    }
  }
  return avgs.map(i => i/arr.length)
}