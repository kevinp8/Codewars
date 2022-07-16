function solution(n){
  let diff = n - Math.floor(n)
  if (diff <= 0.24) return Math.floor(n)
  else if (diff <= 0.74999999999) return Math.floor(n) + 0.5
  else return Math.ceil(n)
}