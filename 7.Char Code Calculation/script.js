function calc(x){
  let num1 = x.split('').reduce((init, char) => init + char.charCodeAt(0),'')
  let num2 = num1
  while (num2.includes('7')) num2 = num2.replace('7', '1')
  return num1.split('').reduce((init, num)=> init+Number(num), 0) - num2.split('').reduce((init, num)=> init+Number(num), 0)
  
}