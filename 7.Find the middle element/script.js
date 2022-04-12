function gimme (triplet) {
    let arr = triplet.slice(0).sort((a, b) => a-b)
    return triplet.indexOf(arr[1])
  }