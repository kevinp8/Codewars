function jumpingNumber(n){
  let nStr = n.toString()
  if(nStr.length == 1) return 'Jumping!!'
  else{
    let jumping = 'Jumping!!'
    nStr.split('').forEach((num, index) => {
      if (index != nStr.length-1) {
        if (Math.abs(Number(num) - Number(nStr[index+1])) != 1) jumping = 'Not!!'
      }
    })
    return jumping
  }
}