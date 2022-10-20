function balancedNum(number){
  let numStr = number.toString()
  if (numStr.length % 2 === 0) {
    let first = numStr.slice(0, numStr.length/2 - 1).split('').reduce((init, i) => init+ +i, 0)
    let second = numStr.slice(numStr.length/2 + 1).split('').reduce((init, i) => init+ +i, 0)
    return first === second ? 'Balanced' : 'Not Balanced'
  } else {
    let first = numStr.slice(0, Math.floor(numStr.length/2)).split('').reduce((init, i) => init+ +i, 0)
    let second = numStr.slice(Math.ceil(numStr.length/2)).split('').reduce((init, i) => init+ +i, 0)
    return first === second ? 'Balanced' : 'Not Balanced'
  }
}