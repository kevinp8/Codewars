function removeParentheses(s){
  let word = ''
  let stack = 0
  for (let i=0; i<s.length; i++) {
    if (s[i] == '(') stack++
    else if (s[i] == ')') stack--
    else if (stack > 0) continue
    else word += s[i]
  }
  return word
}
