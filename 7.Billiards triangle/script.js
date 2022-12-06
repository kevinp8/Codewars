function pyramid(balls) {
  let levels = 0
  let ballsLeft = balls
  for (let i=1; i<=balls; i++){
    ballsLeft -= i
    if(ballsLeft >=0) levels++
    if(ballsLeft <=0) return levels
  }
  return levels
}