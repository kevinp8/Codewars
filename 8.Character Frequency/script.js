function charFreq(message) {
  return message.split('').reduce((init, char) => {
    if (char in init) {
      init[char]++
      return init
    } else {
      init[char] = 1
      return init
    }
  }, {})
}