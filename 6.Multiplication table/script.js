multiplicationTable = function(size) {
    let grid = []
    let num = 1
    let rowCount = 1
    for (let i=0; i<size; i++) {
      let row = []
      for (let j=0; j<size; j++) {
        row.push(num*rowCount)
        num++
      }
      rowCount++
      num =1
      grid.push(row)
    }
    return grid
  }