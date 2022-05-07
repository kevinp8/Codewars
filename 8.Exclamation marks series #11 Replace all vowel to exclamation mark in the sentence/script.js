function replace(s){
  return s.split('').map(i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' ||
               i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U' ? '!' : i).join('') 
}