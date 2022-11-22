const removeConsecutiveDuplicates = s => {
  let words = s.split(' ')
  let arr = []
  for (let i=0; i<words.length; i++) {
    if (words[i] !== words[i-1]) arr.push(words[i])
  }
  return arr.join(' ')
}