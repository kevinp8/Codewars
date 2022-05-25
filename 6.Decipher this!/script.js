function decipherThis(str) {
  str = str.split(' ')
  let nums = []
  let letters = []
  str.forEach(word => {
    let wordSplit = word.split('')
    nums.push(wordSplit.filter(char => (/[0-9]/).test(char)).join(''))
    letters.push(wordSplit.filter(char => (/[a-zA-Z]/).test(char)).join(''))
  })
  letters = letters.map(word => {
    if (word.length >=2) {
      let word2 = word.split('')
      let last = word2.shift()
      let first = word2.pop()
      word2.unshift(first)
      word2.push(last)
      return word2.join('')
    } else return word
  })
  return nums.map((i, index) => String.fromCharCode(i) + letters[index]).join(' ')
};