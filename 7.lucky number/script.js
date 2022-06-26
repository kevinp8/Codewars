function isLucky(n) {
  return n.toString().split('').reduce((init, num)=> init+Number(num) ,0) % 9 === 0
}