function numberToPower(number, power){
  let product = 1
  for (let i=0; i<power; i++) {
    product *= number
  }
  return product
}
