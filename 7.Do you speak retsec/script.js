function reverseByCenter(s){
  if (s.length %2 === 0) {
    return s.slice(s.length/2) + s.slice(0, s.length/2)
  } else return s.slice(Math.ceil(s.length/2)) + s[Math.floor(s.length/2)] + s.slice(0, Math.floor(s.length/2))
}