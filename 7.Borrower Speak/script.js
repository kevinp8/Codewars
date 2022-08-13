function borrow(s){
  return s.toLowerCase().split('').filter(i => i!=='!' && i!=='?' && i!==' '&& i!==':'&& i!==';'&& i!=='.'&& i!==',').join('')
}