const catchSignChange = arr => {
  let changes = 0
  arr.forEach((num, index) => {
    if (num >=0) {
      if (arr[index+1] < 0) changes++
    }
    if (num <0) {
      if (arr[index+1] >= 0) changes++
    }
  })
  return changes
};