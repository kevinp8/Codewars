function isVow(b){
  return b.map(a => String.fromCharCode(a) === 'a' || String.fromCharCode(a) === 'e' || String.fromCharCode(a) === 'i' || String.fromCharCode(a) === 'o' || String.fromCharCode(a) === 'u' ? String.fromCharCode(a) : a)
}