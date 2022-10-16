function spongeMeme(sentence) {
  return sentence.split('').reduce((init, c, index) => index % 2 === 0 ? init + c.toUpperCase() : init + c.toLowerCase(), '')
}