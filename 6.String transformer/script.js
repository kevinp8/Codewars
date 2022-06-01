function stringTransformer(str) {
  return str.split(' ').reverse().map(word => {
    return word.split('').reduce((init, char) => char == char.toLowerCase() ? init + char.toUpperCase() : init + char.toLowerCase(), '')
  }).join(' ')
}
