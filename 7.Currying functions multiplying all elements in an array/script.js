function multiplyAll(arr) {
  return function multiply(n) {
    return arr.map(i=> i*n)
  }
}