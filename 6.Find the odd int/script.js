function findOdd(A) {
    let count = {}
    let most = 1
    let item
    for (const i of A) {
      if (count[i]) {
        count[i]++
      } else {
        count[i] = 1
      }
    }
    for (const i in count) {
      if (count[i]%2 !=0 && count[i]>= most) {item = i}
    }
    return Number(item)
  }