function mirror(text){
  let words = text.split(' ')
  let maxLen = 0
  words.forEach(i => maxLen = Math.max(maxLen, i.length))
  let frame = '*'.repeat(maxLen+4) +'\n'
  words.forEach(i => frame += `* ${i.split('').reverse().join('')}${' '.repeat(maxLen - i.length)} *\n`)
  frame += '*'.repeat(maxLen+4)
  return frame
}