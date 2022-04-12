function insertDash(num) {
    let nums = ''
    num.toString().split('').forEach((numb, index) => {
      if (numb%2 ==0 || index == num.toString().length-1) nums+=numb
      else if (num.toString().split('')[index+1] %2 != 0)  {
        nums+= numb+'-'
      }
      else nums+=numb
    })
    return nums
  }