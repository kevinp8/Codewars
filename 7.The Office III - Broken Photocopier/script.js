function broken(x){
  return x.split('').map(i => i === '0' ? '1' : '0').join('')
}