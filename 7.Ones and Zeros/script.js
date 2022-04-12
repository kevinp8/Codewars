const binaryArrayToNumber = arr => {
    let sum = 0
    let power = arr.length-1
    for (let i=0; i<arr.length; i++) {
      if (arr[i] == 1) {
        sum += 2**power
      }
      power--
    }
    return sum
  };