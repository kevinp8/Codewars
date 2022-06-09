function countLettersAndDigits(input) {
  return input.split('').filter(i => /[a-zA-Z0-9]/.test(i)).length
}