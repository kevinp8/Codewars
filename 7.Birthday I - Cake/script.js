function cake(x, y){
  let total = y.split('').reduce((init, char, index) => index%2 === 0 ? init + char.charCodeAt(0) : init + char.charCodeAt(0) - 96, 0)
  return (total > x*0.7) ? 'Fire!' : 'That was close!'
}