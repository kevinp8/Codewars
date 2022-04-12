function howManyGifts(maxBudget, gifts){
    let giftsSort = gifts.sort((a, b) => a-b)
    let numgifts = 0
    for (const i of giftsSort) {
      maxBudget -= i
      if (maxBudget >=0) {
        numgifts++
      }
    }
    return numgifts
  }