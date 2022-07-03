function moveTen(s){
  return s.split('').map(i => (i.charCodeAt(0) + 10) > 122 ? String.fromCharCode(i.charCodeAt(0) + 10 - 26) : String.fromCharCode(i.charCodeAt(0) + 10)).join('')
}