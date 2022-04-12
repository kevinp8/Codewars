const xMarksTheSpot = (input) => {
    let numX = 0
    let coords = []
    for (let i=0; i<input.length; i++) {
      for (let j=0; j<input[i].length; j++) {
        if (input[i][j] == 'x') {
          numX++
          coords.push(i, j)
        }
      }
    }
    return numX <=1 ? coords : []
  }