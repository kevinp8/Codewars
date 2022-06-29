function validSpacing(s) {
  let words = s.split(' ')
  return s === '' ? true : !words.some(i => i == '')
}