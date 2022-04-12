function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2).sort((a, b)=> a-b)
    let newnew = []
    newArr.forEach(i => {
      if (newnew.includes(i) == false) {
        newnew.push(i)
      }
    })
    return newnew
  }