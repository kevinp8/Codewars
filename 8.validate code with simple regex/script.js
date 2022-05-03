function validateCode (code) {
  return code.toString()[0] === '1' || code.toString()[0] === '2' || code.toString()[0] === '3'
}