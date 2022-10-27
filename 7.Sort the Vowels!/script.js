function sortVowels(s){
  let arr = []
  if (s) {
    for (let i=0; i<s.length; i++) {
      if (/[aeiou]/i.test(s[i])) arr.push(`|${s[i]}`)
      else arr.push(`${s[i]}|`)
    }
    return arr.join('\n')
  } else return ''
}