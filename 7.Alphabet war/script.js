function alphabetWar(fight)
{
  const left = {
    w:4,
    p:3,
    b:2,
    s:1
  }
  const right = {
    m:4,
    q:3,
    d:2,
    z:1
  }
  let leftPoints = 0
  let rightPoints = 0
  for (const i of fight){
    if(i in left){leftPoints += left[i]}
    if(i in right) {rightPoints += right[i]}
  }
  if (leftPoints > rightPoints) {
    return 'Left side wins!'
  } else if (rightPoints > leftPoints) {
    return 'Right side wins!'
  } else {
   return "Let's fight again!";
  }
}