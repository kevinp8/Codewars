function eachCons(array, n) {
    let arr = []
    let subarr = []
    for (let i=0; i<array.length; i++) {
      for (let j=0; j<n; j++) {
        if (array.includes(array[i+j])) {subarr.push(array[i+j])}
      }
      arr.push(subarr)
      subarr = []
    }
    return arr.filter(i => i.length ==n);
    
  }