function dotCalculator (equation) {
    let arr = equation.split(' ')
    let dots = ''
    if (arr[1] == '+') {
      return arr[0] + arr[2]    
    } else if (arr[1] == '-') {
      let times = Math.abs(arr[0].length - arr[2].length)
      for (let i=0; i<times; i++) {
        dots += '.'
      }
      return dots
    } else if (arr[1] == '*') {
      let times = arr[0].length * arr[2].length
      for (let i=0; i<times; i++) {
        dots += '.'
      }
      return dots
    } else if (arr[1] == '//') {
      let times = Math.floor(arr[0].length / arr[2].length)
      for (let i=0; i<times; i++) {
        dots += '.'
      }
      return dots
    }
  }