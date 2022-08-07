function tailSwap(arr) {
  return arr.map((i, index)=> {
    let stuff = i.split(':')
    if (index===0) {
      return stuff[0] + arr[1].slice(arr[1].indexOf(':'))
    } else return stuff[0] + arr[0].slice(arr[0].indexOf(':'))
  })
}