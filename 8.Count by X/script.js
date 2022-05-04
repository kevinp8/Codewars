function countBy(x, n) {
  let z = [];
  let num = 0
  for (let i=0; i<n; i++) {
    num +=x
    z.push(num)
  }
  return z;
}