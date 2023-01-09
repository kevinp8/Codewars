function toCurrency(price){
  price = price.toString()
  let num = ''
  let digit = 0
  for (let i=price.length-1; i>=0; i--){
    if (digit === 3){
      num = price[i] + ',' + num
      digit = 1
    } else{
      num = price[i] + num
      digit++
    }
  }
  return num
}