function sumOfN(n) {
  if (n===0) return [0]
  else 
 {let sum = 0
 let arr = []
 for (let i=0; i<=n; i++) {
   sum += i
   arr.push(sum)
 }
  for (let i=0; i>=n; i--) {
    sum += i
    arr.push(sum)
  }
  return arr}
};