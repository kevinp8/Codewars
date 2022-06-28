function revrot(str, sz) {
  if (sz > str.length || sz<=0 || sz>str.length) return ''
  else {
    let first = 0
    let chunks = []
    for (let i=0; i<Math.ceil(str.length/sz); i++) {
      chunks.push(str.slice(first, first+sz))
      first +=sz
      second += sz
    }
    if (chunks.slice(-1).length<sz) chunks.pop()
    return chunks.map(chunk => {
      let sumCubeDigits = chunk.split('').reduce((init, i) => init + (Number(i)**3), 0)
      if (sumCubeDigits%2 == 0) return chunk.toString().split('').reverse().join('')
      else {
        let chonk = chunk.toString().split('')
        chonk.push(chonk.shift())
        return chonk.join('')
      }
    }).join('')
  }
}