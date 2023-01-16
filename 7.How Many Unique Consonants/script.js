function countConsonants(str) {
  str = str.toLowerCase()
  let consonants = {}
  for (let i=0; i<str.length; i++){
    if (/[aeiou]/.test(str[i]) || !(/[a-z]/.test(str[i]))) continue
    else if (consonants[str[i]]) continue
    else consonants[str[i]] = 1
  }
  return Object.keys(consonants).length
  
}