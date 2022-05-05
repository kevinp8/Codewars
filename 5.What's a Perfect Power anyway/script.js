var isPP = function(n){
  let power = 2
  let num = 0
  let anum = 0
  for (let i=2; i<n;i++) {
    if (num == n) break
    for (let j=2; j<n;j++) {
      if (i**j == n) {
        num = i**j
        anum = i
        power = j
      }
      else if (i**j > n) break
      
      if (num == n) break
    }
  }
  return num === n ? [anum, power] : null
}