function bump(x){
  return x.split('').reduce((init, num) => num === 'n' ? init + 1 : init,0) > 15 ? 'Car Dead' : 'Woohoo!'
}