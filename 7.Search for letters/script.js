function change(string){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  string.toLowerCase().split('').forEach((char) => {
    if (alpha.includes(char)) nums[alpha.indexOf(char)] = 1
  })
  return nums.join('')
}