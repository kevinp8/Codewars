function maxTriSum(numbers){
  let unique = []
  numbers.forEach(num => {
    if (!unique.includes(num)) unique.push(num)
  })
  unique.sort((a, b) => a-b)
  return unique.pop() + unique.pop() + unique.pop()
}