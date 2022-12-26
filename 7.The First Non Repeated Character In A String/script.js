function firstNonRepeated(s) {
  let dict = {}
  for (let i=0; i<s.length; i++){
    if (dict[s[i]]) dict[s[i]]++
    else dict[s[i]] = 1
  }
  for(let key in dict){
    if (dict[key] === 1) return key
  }
  return null
}