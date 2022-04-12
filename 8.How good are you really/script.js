function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = 0
    for (const i of classPoints) {totalPoints += i}
    const avg = totalPoints / classPoints.length
    return yourPoints > avg ? true : false
  }