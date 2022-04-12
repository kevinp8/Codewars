function dashatize(num) {
    if (num < 0) {num *=-1}
    return Number.isInteger(num) == false ? 'NaN' : String(num).split('').reduce((initial, item, index, array) => {
      if (Number(item)%2 == 0) {
        return initial += item
      } else {
          if (index == 0) {
            initial += item
          } else {initial += '-' + item}
          if (array[index+1]%2 == 0) {
            return initial += '-'
          }
          return initial
        }
      }, '')
}