function shuffleIt(arr,...swaps){
  for(let i=0; i<swaps.length; i++){
    let item = arr[swaps[i][0]]
    arr[swaps[i][0]] = arr[swaps[i][1]]
    arr[swaps[i][1]] = item
  }
  return arr
  
}