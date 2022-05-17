function capitalize(s,arr){
  return s.split('').reduce((init, char, index) => arr.includes(index) ? init+char.toUpperCase() : init+char,'')
};
