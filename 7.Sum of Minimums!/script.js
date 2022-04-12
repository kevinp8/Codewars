function sumOfMinimums(arr) {
    let mins = []
    arr.forEach(i => mins.push(Math.min(...i)))
    return mins.reduce((sum, current) => sum+= current, 0)
  }