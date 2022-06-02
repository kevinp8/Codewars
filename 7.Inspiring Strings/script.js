function longestWord(stringOfWords){
  let longest = ''
  stringOfWords.split(' ').forEach(word => word.length >= longest.length ? longest = word : null)
  return longest
}