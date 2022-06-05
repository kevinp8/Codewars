function factorial(n){
  if (n < 0 || n>12){
    throw new RangeError
  } else {
    let product = 1
    for (let i=1; i<=n; i++) {
      product *= i
    }
    return product
  }
}