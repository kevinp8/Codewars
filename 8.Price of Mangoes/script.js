function mango(quantity, price){
  let init = quantity * price
  while (quantity%3 != 0) quantity -= 1
  return init - (quantity/3*price)
}