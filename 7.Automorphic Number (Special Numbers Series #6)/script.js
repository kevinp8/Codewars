function automorphic(n){
  return (n**2).toString().endsWith(`${n}`) ? 'Automorphic' : 'Not!!'
}