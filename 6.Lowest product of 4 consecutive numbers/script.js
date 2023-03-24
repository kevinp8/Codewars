function lowestProduct(input) { 
  if (input.length < 4) return "Number is too small"
  else {
    input = input.split('')
    let left = 0
    let right = 4
    let min = Number.MAX_SAFE_INTEGER
    while(right <= input.length){
      let prod = input.slice(left, right).reduce((init, i) => init * Number(i),1)
      min = Math.min(min, prod)
      left++
      right++
    }
    return min
  }
}