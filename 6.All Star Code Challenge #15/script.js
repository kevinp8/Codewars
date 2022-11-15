function rotate(str){
  let arr = []
  let word = str
  for (let i=0; i<str.length; i++) {
    word = word.slice(1)+word[0]
    arr.push(word)
  }
  return arr

}