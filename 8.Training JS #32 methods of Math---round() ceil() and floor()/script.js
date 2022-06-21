function roundIt(n){
  let nStr = n.toString().split('.')
  if (nStr[1].length > nStr[0].length) return Math.ceil(n)
  else if (nStr[1].length < nStr[0].length) return Math.floor(n)
  else return Math.round(n)
  
}