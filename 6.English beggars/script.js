function beggars(values, n){
  if (n  == 0 ) return []
  else {
    let beggars = {}
  for (let i=0; i<n; i++) {
    beggars[i] = []
  }
  let beggar = 0
  for (let i=0; i<values.length; i++) {
    beggars[beggar].push(values[i])
    beggar++
    if (beggar == Object.keys(beggars).length)  beggar = 0
  }
  return Object.keys(beggars).map(i => beggars[i].reduce((init, j)=> init+j, 0))
  }
  
}