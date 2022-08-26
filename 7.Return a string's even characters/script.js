function evenChars(string) {
  return string.length < 2 || string.length > 100 ? 'invalid string' : string.split('').filter((i, index) => index%2 !== 0) 
}