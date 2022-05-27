function cutIt(arr){
  let min = Math.min(...arr.map(i=>  i.length))
  return arr.map(i => i.slice(0, min))
}