function countDevelopers(list) {
    let num = 0
    list.forEach(i => {
      if (i.continent == 'Europe' && i.language =='JavaScript') {
        num++
      }
    })
    return num
  }