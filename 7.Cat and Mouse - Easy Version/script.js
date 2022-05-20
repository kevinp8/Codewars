function catMouse(x){
  x = x.split('')
  x.shift()
  x.pop()
  return x.length > 3 ? 'Escaped!' : 'Caught!'
}