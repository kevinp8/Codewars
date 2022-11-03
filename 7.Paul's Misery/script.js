function paul(x){
  let points = 0
  for (let i of x) {
    if (i === 'kata') points += 5
    else if (i === 'Petes kata') points += 10
    else if (i === 'eating') points++
  }
  if (points < 40) return 'Super happy!'
  else if (points < 70) return 'Happy!'
  else if (points < 100) return 'Sad!'
  else return 'Miserable!'
}