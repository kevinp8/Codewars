function isNice(arr){
  return arr.length >= 2 ? arr.every(num => arr.includes(num-1) || arr.includes(num+1)) : false
}