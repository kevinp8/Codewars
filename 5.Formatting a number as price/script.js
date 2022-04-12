var numberToPrice = function(number) {
    if (typeof number == 'string') return 'NaN'
    else {
      let sign
      if (number<0) {
        sign = '-'
        number *= -1
      }
      let stringNum = number.toFixed(3).toString().split('.')
      let dec = stringNum[1].slice(0,2)
      console.log(dec)
      let arr = []
      for (let i=stringNum[0].length-1; i>=0; i--) {
        if (arr.length%3 == 0 && arr.length>0) {
          arr.push(stringNum[0][i]+',')
          console.log(arr)
        }
        else {
          arr.push(stringNum[0][i])
          console.log(arr)
        }
      }
      arr.reverse()
      return sign == '-' ? sign+arr.join('')+'.'+dec : arr.join('')+'.'+dec
    }
  }