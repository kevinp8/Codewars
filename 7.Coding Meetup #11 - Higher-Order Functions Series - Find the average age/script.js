function getAverageAge(list) {
    let sum = 0
    list.forEach(i => sum += i.age)
    return Number((sum/list.length).toFixed(0))
  }