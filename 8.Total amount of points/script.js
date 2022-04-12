function points(games) {
    let points = 0
    for (const i of games) {
      if (i[2] < i[0]) {
        points +=3
      } else if (i[2] == i[0]) {
        points +=1
      }
    }
    return points
  }