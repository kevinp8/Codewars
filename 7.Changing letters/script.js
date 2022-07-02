function swap (string) {
  return string.split('').map(i => /[aeiou]/.test(i) ? i.toUpperCase() : i).join('')
}