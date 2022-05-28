function minimumSteps(numbers, value){
  let arr = numbers.sort((a, b)=> a-b)
  let sum = 0
  let count = -1
  while (sum < value) {
    sum += arr.shift()
    count++
  }
  return count
}