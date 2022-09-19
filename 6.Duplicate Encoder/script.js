function duplicateEncode(word){
  let chars = word.toLowerCase().split('')
    return chars.map(i => chars.indexOf(i) === chars.lastIndexOf(i) ? '(' : ')').join('')
}