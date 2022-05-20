var FilterString = function(value) {
  return Number(value.split('').filter(i => !isNaN(i)).join(''))
}