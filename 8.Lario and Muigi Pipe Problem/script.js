function pipeFix(numbers){
    let nums = []
    for (let i=Math.min(...numbers); i<=Math.max(...numbers); i++) {
      nums.push(i)
    }
    return nums
  }