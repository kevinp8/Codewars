function scale(strng, k, n) {
  if (strng)
    {let words = strng.split('\n')
    let final = []
    
    words.forEach(word => {
      let newWord = ''
      word.split('').forEach(letter => {
        for (let i=0; i<k; i++) newWord += letter
      })
      for (let i=0; i<n; i++) final.push(newWord)
    })
  return final.join('\n')}
  else return ''
}