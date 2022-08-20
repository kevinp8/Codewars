Array.prototype.filter = function (func) {
  let arr = []
  this.forEach(i => {
    if (func(i)) arr.push(i)
  })
  return arr
}
