function count (string) {  
  let arr = string.split('')
  let counts = {}
  arr.forEach(i => {
    if (counts[i]) counts[i]++
    else counts[i] = 1
  })
  return counts
}

function countV2 (string) {  
  return string.split('').reduce((initial, letter) => {
    initial[letter] ? initial[letter]++ : initial[letter] = 1
    return initial
  }, {})
}