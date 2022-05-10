function remove(s,n){
  let word = s
  for (let i=0; i<n; i++) {
    word = word.replace('!', '')
  }
  return word
}