function orderFood(list) {
    let order = {}
    for (const i of list) {
      if (i.meal in order) {
        order[i.meal] += 1
      } else{
        order[i.meal] = 1
      }
    }
    return order
  }