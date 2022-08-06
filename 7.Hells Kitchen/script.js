function gordon(a){
  return a.split(' ').map(word => {
    let newWord = word.toUpperCase()
    while (/[AEIOU]/.test(newWord)) {
      newWord = newWord.replace('A', '@').replace('E', '*').replace('I', '*').replace('O', '*').replace('U', '*')
    }
    return newWord+'!!!!'
  }).join(' ')
}