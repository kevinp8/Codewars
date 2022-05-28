Math.round = function(number) {
  let num = number.toString().split('.')
  if (Number.isInteger(number)) return number
  else if (Number(num[1][0] >= 5)) return Number(num[0])+1
  else return Number(num[0])
};

Math.ceil = function(number) {
  let num = number.toString().split('.')
  return Number.isInteger(number) ? number : Number(num[0]) + 1
};

Math.floor = function(number) {
  let num = number.toString().split('.')
  return Number(num[0])
};