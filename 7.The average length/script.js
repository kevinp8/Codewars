function averageLength(words) { 
  let lengths = 0
  for (let i=0; i< words.length; i++) {
    lengths += words[i].length
  }
  let avg = Math.round(lengths/words.length)
  return words.map(i => i[0].repeat(avg))
}