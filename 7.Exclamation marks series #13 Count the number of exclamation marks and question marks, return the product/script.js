function product (string) {
  const ex = string.split('').filter(i => i==='!').length
  const ques = string.split('').filter(i => i==='?').length
  return ex*ques
}