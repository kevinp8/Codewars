function createArrayOfTiers(num) {
    let bum = num.toString()
    let str = ''
    let arr = []
    for (let i=0; i<bum.length; i++) {
      str += bum[i]
      arr.push(str)
    }
    return arr
}