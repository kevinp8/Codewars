function billboard(name, price = 30){
  return name.split('').reduce((init, char) => init + price,0)
} 