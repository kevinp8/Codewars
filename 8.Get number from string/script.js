function getNumberFromString(s) {
  return parseInt(s.split('').filter(i => (/[0-9]/).test(i)).join(''));
}