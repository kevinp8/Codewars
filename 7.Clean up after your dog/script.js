function crap(x, bags, cap){
  x = x.join(',').split(',')
  let total = bags*cap
  let dog = false
  x.forEach(i => {
    if (i === '@') total -=1
    else if (i === 'D') dog = true
  })
  if (dog) return 'Dog!!' 
  else return total >= 0 ? 'Clean' : 'Cr@p'
}