var maxSequence = function(nums){
  let maxes = 0
    for (let i=0; i<nums.length; i++) {
        let sums = nums[i]
        let currentSum = nums[i]
        for (let j=i+1; j<nums.length; j++) {
            currentSum += nums[j]
            if (currentSum > sums) sums = currentSum
        }
        if (sums > maxes) maxes = sums
    }
  return maxes
}