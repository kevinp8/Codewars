function upArray(arr){
  let index = arr.length-1
  if (arr.some(i => i<0 || i>9) || arr.length===0) return null
  else {
    while (arr[index] === 9) {
      arr[index] = 0
      if (index === 0) arr.unshift(0)
      else index--
    }
    arr[index]++
  }
  
  return arr
}