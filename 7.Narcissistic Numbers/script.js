function isNarcissistic(n) {
  let len = n.toString().length
  let sum = n.toString().split('').reduce((init, num) => init + Number(num)**len, 0)
  return sum == n
}