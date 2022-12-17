function calculate(string) {
  let str = string.split(' ')
  if (str[5] === 'loses') return Number(str[2]) - Number(str[6])
  else return Number(str[2]) + Number(str[6])
}