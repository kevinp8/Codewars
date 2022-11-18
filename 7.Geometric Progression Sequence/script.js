function geometricSequenceElements(a, r, n){
  let arr = [a]
  for (let i=1; i<n; i++) {
    arr.push(arr[arr.length-1]*r)
  }
  return arr.join(', ')
}