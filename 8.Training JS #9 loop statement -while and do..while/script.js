function padIt(str,n){
  let mid = Math.ceil(n/2)
  let ye = ''
  let count = 1
  while (count <= n) {
    if (count === mid) {
      ye += '*' + str
      count++
    } else {
      ye += '*'
      count++
    }
  }
  return ye
}