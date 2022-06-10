function checkThreeAndTwo(array) {
  let threes = false
  let twos = false
  array.forEach(letter => {
    let trimmed = array.filter(i => i === letter).length
    if (trimmed == 3) threes = true
    else if (trimmed == 2) twos = true
  })
  return threes && twos
}