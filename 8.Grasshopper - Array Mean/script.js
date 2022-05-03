var findAverage = function (nums) {
  return nums.reduce((init, num) => init + num, 0)/nums.length
}