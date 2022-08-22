function solve(a){
  let evens = 0
  let odds = 0
  for(let i=0; i<a.length; i++){
    if (Number.isInteger(a[i])) {
      if (a[i]%2 === 0) evens++
      else odds++
    }
  }
  return evens-odds
};