function reverseAndMirror(s1,s2) {
  s1 = s1.split('').reduce((init, i) => i === i.toUpperCase() ? i.toLowerCase() + init : i.toUpperCase() + init, '')
  s2 = s2.split('').reduce((init, i) => i === i.toUpperCase() ? i.toLowerCase() + init : i.toUpperCase() + init, '')
  
  return  s2 + '@@@' + s1+ s1.split('').reverse().join('') 
}