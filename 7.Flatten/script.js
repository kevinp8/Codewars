var flatten = function (array){
  let arr = []
  for (let i of array) {
    if (Array.isArray(i)) arr.push(...i)
    else arr.push(i)
  }
  return arr
}