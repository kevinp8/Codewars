function specialNumber(n){
  let special = 'Special!!'
  n.toString().split('').forEach(i => /[0-5]/.test(i) ? true : special = 'NOT!!')
  return special
}