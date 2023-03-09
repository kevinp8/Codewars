function isAllPossibilities(x){
  if(!x.length) return false
  for (let i=0; i<=x.length-1; i++){
    if (!x.includes(i)) return false
  }
  console.log(x)
  return true

}