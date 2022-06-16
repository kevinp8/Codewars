function fireFight(s){
  let word = s
  while (word.includes('Fire')) word = word.replace('Fire', '~~')
  return word
}