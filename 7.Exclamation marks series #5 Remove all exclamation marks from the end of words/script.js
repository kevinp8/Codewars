function remove (string) {
  return string.split(' ').map(hi => {
    let word = hi.split('').reverse().join('')
    while (word[0]=='!') {
      word = word.replace('!', '')
    }
    return word.split('').reverse().join('')
  }).join(' ')
}