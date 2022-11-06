function binRota(arr){
  let sorted = []
  for (let i=0; i<arr.length; i++) {
    if (i%2 === 0) {
      sorted = [...sorted, ...arr[i]]
    } else {
      sorted = [...sorted, ...arr[i].reverse()]
    }
  }
  return sorted


}