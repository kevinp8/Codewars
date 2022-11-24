function moreZeros(s){
  let chars = new Set(s.split(''))
  let arr = []
  for (let i of chars) {
    let bin = i.charCodeAt(0).toString(2).split('').sort()
    if (bin[Math.floor(bin.length/2)] == 0) arr.push(i)
  }
  return arr
}