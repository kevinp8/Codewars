const prevMultOfThree = n => {
  let num = n.toString()
  for (let i=0; i<n.toString().length; i++) {
    if (Number(num) <3) return null
    else if(Number(num) %3 === 0) return Number(num)
    else {
      num = num.split('')
      num.pop()
      num = num.join('')
    }
  }
  if (Number(num) <3) return null
    else if(Number(num) %3 === 0) return Number(num)
}