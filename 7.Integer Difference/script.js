export const intDiff = (arr, n) => {
  let times = 0
  for (let i=0; i<arr.length-1; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (Math.abs(arr[i]-arr[j]) === n) times++
    }
  }
  return times
}