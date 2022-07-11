function newAvg(arr, newavg) {
  let theNum = Math.ceil(newavg*(arr.length+1) - arr.reduce((init, i)=> init +i ,0))
  if (theNum < 0) {
    throw 'Invalid Number'
  } else return theNum
}