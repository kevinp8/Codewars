function maxProduct(numbers, size){
  let arr = numbers.sort((a, b)=> a-b)
  let product = 1
  for (let i=0; i<size; i++) {
    product *= arr.pop()
  }
  return product
}