function stringExpansion(s) {
  let num = 1
  let str = ''
  for (let i of s.split('')) {
    if (/[0-9]/.test(i)) num = Number(i)
    else {
      str += i.repeat(num)
    }
  }
  return str
}