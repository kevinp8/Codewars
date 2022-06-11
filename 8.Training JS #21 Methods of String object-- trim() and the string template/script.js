function fiveLine(s){
  let str = s.trim()
  let arr = []
  for (let i=1; i<=5; i++) {
    arr.push(str.repeat(i))
  }
  return arr.join('\n')
}