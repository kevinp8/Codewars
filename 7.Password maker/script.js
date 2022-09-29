function makePassword(phrase) {
  let words = phrase.split(' ')
  let pass = words.map(i => i[0].toLowerCase() == 'i' ? '1' : i[0].toLowerCase() == 'o' ? '0' : i[0].toLowerCase() == 's' ? '5' : i[0] )
  return pass.join('')
}