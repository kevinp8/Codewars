function palindrome(num) { 
    if (Number.isInteger(num) && num > 0) {
      return String(num) === String(num).split('').reverse().join('')
    }
    else {
      return 'Not valid'
    }
  } 