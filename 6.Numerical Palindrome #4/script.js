function palindrome(num) { 
    if (Number.isInteger(num) && num>0) {
      let lower = num
      let upper = num
      while (String(lower) != String(lower).split('').reverse().join('')) {
        lower--
      }
      while (String(upper) != String(upper).split('').reverse().join('')) {
        upper++
      }
      if (num - lower > upper - num) {
        return upper
      } else if (num < 11) {
        return 11
      } else {
        return lower
      }
    } else {return 'Not valid'}
  }