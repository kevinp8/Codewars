//return price without vat
function excludingVatPrice(price){
  // your code
  return price==null ? -1 : parseFloat(((price*20)/23).toFixed(2))
}