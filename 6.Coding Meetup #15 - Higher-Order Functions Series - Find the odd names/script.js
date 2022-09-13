function findOddNames(list) {
  let odds = []
  for (let i of list) {
    let fn = i.firstName.split('')
    let codeSum = fn.reduce((init, char) => init + char.charCodeAt(0) , 0)
    if (codeSum % 2 !== 0) odds.push(i)
  }
  return odds
}