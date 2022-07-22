function caffeineBuzz(n){
  let word
  if (n%3 === 0 && n%4 === 0) word = 'Coffee'
  else if (n%3 === 0) word = 'Java'
  else return 'mocha_missing!'
  if (n %2 == 0) word +='Script'
  return word
}