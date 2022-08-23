function remove (string) {
  let str = string
  let exclams = 0
  while(str.includes('!')) {
    str = str.replace('!', '')
    exclams++
  }
  return str + '!'.repeat(exclams)
}