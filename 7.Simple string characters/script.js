function solve(s){
  let counts = [0, 0, 0, 0]
  s.split('').forEach( i => {
    if (/[A-Z]/.test(i)) counts[0]++
    else if (/[a-z]/.test(i)) counts[1]++
    else if (/[0-9]/.test(i)) counts[2]++
    else counts[3]++
  })
  return counts
}