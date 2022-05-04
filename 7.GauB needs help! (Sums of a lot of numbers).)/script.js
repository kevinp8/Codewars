function f(n){
  if (Number.isInteger(n) && n>0) {
    let sum =0
    for (let i=1; i<=n; i++) {
      sum += i
    }
    return sum
  } else return false
};