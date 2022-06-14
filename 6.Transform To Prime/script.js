function minimumNumber(numbers){
  
  let min = 0
  let loop = true
  
  while (loop) {
    
    let isPrime = true
    let sum = numbers.reduce((init, i)=> init + i,0) + min
    
    for (let i=2; i<=Math.ceil(sum/2); i++) {
      if (sum%i == 0) isPrime = false
    }
    
    if (isPrime == false) min++
    else loop = false
    
  }
  return min
}