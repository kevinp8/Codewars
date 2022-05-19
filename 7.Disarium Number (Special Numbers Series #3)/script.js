function disariumNumber(n){
  let nStr = n.toString()
  let sum = 0
  for (let i=0; i<nStr.length; i++){
    sum += Number(nStr[i])**(i+1)
  }
  return sum === n ? 'Disarium !!' : 'Not !!'
}
