function freqSeq(str, sep) {
  let counts = {}
  let strr = []
  str.split('').forEach(char => {
    if (char in counts) counts[char]++
    else counts[char] = 1
  })
  str.split('').forEach(char => strr.push(counts[char]))
  return strr.join(sep)
}
