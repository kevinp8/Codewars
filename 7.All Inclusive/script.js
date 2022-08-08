function containAllRots(strng, arr) {
  let rotations = [strng]
  let word = strng.split('')
    for (let i=0; i<strng.length-1; i++) {
      let letter = word.pop()
      word.unshift(letter)
      rotations.push(word.join(''))
    }
  if (strng === '') return true
  return rotations.every(i => arr.includes(i))
}