function squareSum(numbers){
    return numbers.reduce((initial, num) => initial + num**2, 0)
  }