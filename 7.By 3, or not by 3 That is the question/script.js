function divisibleByThree(str){
  return str.split('').reduce((init, num)=> init + Number(num),0)%3===0
}