function solve(arr){
  let nums = []
  for (let i=0; i<arr.length; i++) {
    let greater = true
    for (let j=i+1; j<arr.length; j++) {
      if (arr[i] <= arr[j]) greater = false
    }
    if (greater) nums.push(arr[i])
  }
  return nums
};