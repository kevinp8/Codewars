function permuteAPalindrome (input) { 
  let evenStr = input.length % 2 === 0
  let chars = {}
  for (let i=0; i<input.length; i++) {
    if (input[i] in chars) chars[input[i]]++
    else chars[input[i]] = 1
  }
  let oddCount = 0
  for (let key in chars) {
    if (chars[key] %2 !== 0) oddCount++
    if (oddCount > 1) break
  }
  return evenStr ? oddCount === 0 : oddCount === 1
}
