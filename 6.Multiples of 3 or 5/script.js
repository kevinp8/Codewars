function solution(number){
  let mult3 = 0
  let mult5 = 0
  let nums = []
  while (mult3 < number) {
    mult3 +=3
    if (mult3 < number) nums.push(mult3)
  }
  while (mult5 < number) {
    mult5 +=5
    if (mult5%3!=0 && mult5<number) {
       nums.push(mult5)
    }
  }
  console.log(nums)
  return nums.reduce((initial, num) => initial += num,0)
}