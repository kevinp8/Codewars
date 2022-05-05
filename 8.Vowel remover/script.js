function shortcut (string) {
  return string.split('').filter(char => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u').join('')
}