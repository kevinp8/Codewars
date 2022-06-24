function shorter_reverse_longer(a,b){
  let short = a.length >= b.length ? b : a
  let long = a.length >= b.length ? a : b
  return `${short}${long.split('').reverse().join('')}${short}`
}