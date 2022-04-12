function amountOfPages(summary){
    let string = ''
    let num = 0
    while (string.length != summary) {
      num++
      string += num.toString()
    }
    return num
  }