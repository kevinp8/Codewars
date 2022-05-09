function findLongest(array){
  let longest = ''
  array.forEach(num => {
    if (num.toString().length > longest.length) longest = num.toString()
  })
  return parseInt(longest)
}