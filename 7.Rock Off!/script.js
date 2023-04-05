function solve(a, b) {
  let left = 0
  let right = 0
  for (let i=0; i<a.length; i++){
    if (a[i] > b[i]) left ++
    else if (a[i] < b[i]) right++
  }
  if (left < right) return `${left}, ${right}: Bob made "Jeff" proud!`
  else if (left > right) return `${left}, ${right}: Alice made "Kurt" proud!`
  else return `${left}, ${right}: that looks like a "draw"! Rock on!`
}