function countPositivesSumNegatives(input) {
    let posSum = 0
    let negSum = 0
    if (Array.isArray(input)) {
      for (const i of input) {
        i > 0 ? posSum++ : negSum += i
      }
      if (input.length > 0) {
       return [posSum, negSum]
      } else {return [];}
    } else {return []}
  
}