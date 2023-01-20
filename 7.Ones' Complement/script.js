function onesComplement(n) {
  return n.split('').reduce((init, i) => i === '1' ? init + '0' : init + '1','')
};