function SeriesSum(n)
{
  let denom = 1
  let sum = 0
  for (let i=0; i<n; i++) {
    sum += 1/denom
    denom +=3
  }
  return String(sum.toFixed(2))
}