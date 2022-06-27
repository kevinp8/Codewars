function twoDecimalPlaces(number) {
  let num = number.toString().split('.')
  num[1] = num[1].slice(0, 2)
  return Number(num.join('.'))
}