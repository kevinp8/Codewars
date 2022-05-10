function bouncingBall(h,  bounce,  window) {
  if (h>0 && bounce > 0 && bounce < 1 && window<h) {
    let ballH = h
    let ballSeen = 1
    while (ballH > window) {
      
      ballH *= bounce
      if (ballH > window)
        ballSeen += 2
    }
    return ballSeen
  } else return -1
}