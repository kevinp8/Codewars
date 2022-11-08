function vowelOne(s){
  return s.split('').reduce((init, i) => /[aeiou]/i.test(i) ? init+'1' : init+'0', '')
}