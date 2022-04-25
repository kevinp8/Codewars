function removeExclamationMarks(s) {
  return s.split('').filter(i => i!='!').join('')
}