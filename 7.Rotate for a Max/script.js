function maxRot(n) {
  let max = n
  let rot = n.toString().split('')
  for (let i=0; i<rot.length-1; i++) {
    rot.push(rot.splice(i, 1))
    max = Math.max(max, Number(rot.join('')))
  }
  return max
}