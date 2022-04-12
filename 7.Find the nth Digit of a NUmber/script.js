var findDigit = function(num, nth){
    if (nth < 1) {return -1}
    else {
      let numb = (num*-1).toString()
      if (numb.length < nth) return 0
      else {
        numb = num.toString().split('').reverse()[nth-1]
        return parseInt(numb)
      }
    }
  }