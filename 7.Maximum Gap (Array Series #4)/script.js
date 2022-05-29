function maxGap (numbers){
  let maxGap = 0
  numbers.sort((a, b)=> a-b).forEach((num, index) => {
    if (index != numbers.length-1) {
      if (numbers[index+1] - num > maxGap) maxGap = numbers[index+1] - num
    }
  })
  return maxGap
}