var vampire_test = function(a, b){
  let stringForm = (a.toString() + b.toString()).split('')
  let product = (a*b).toString()
  return stringForm.every(i => product.includes(i)) && product.length === stringForm.length
}