function switcheroo(x){
  return x.split('').map(i => {
    if (i ==='a') return 'b'
    if (i ==='b') return 'a'
    else return 'c'
  }).join('')
}