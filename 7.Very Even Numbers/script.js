function isVeryEvenNumber(n) {
  let num = n.toString().split('')
  let num2
  
  if (num.length < 2) return n%2 == 0
  else {
    num2 = num.reduce((init, i) => init + Number(i),0)
     return isVeryEvenNumber(num2)
  }
  
}