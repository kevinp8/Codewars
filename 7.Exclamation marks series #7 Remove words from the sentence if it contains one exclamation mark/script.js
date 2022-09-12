function remove (string) {
  let words = string.split(' ')
  words = words.filter(word => !word.includes('!') || word.indexOf('!') != word.lastIndexOf('!'))
  return words.join(' ');
}