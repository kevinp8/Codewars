function incrementer(nums) { 
  return nums.map((num, index) => num+index+1 >= 10 ? (num+index+1)%10 : num+index+1 )
}