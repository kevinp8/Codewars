function inArray(array1,array2){
    let arr = []
    for (let i of array2) {
      for (let j of array1) {
        if (i.includes(j) && !arr.includes(j)) {
          arr.push(j)
        }
      }
    }
    return arr.sort()
  }