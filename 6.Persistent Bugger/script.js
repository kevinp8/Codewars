function persistence(num) {
    let arr = String(num).split('')
    let times = 0
    while (arr.length > 1) {
      arr = String(arr.reduce((initial, num) => initial * Number(num), 1)).split('')
      times ++
    }
   return times
 }