function mxdiflg(a1, a2) {
    if (a1.length <1 || a2.length<1) {return -1}
    else{
      let difference = 0
      for (let i of a1) {
        for (let j of a2) {
          let subtract = i.length-j.length
          if (subtract < 0) {subtract *= -1}
          if (subtract > difference) {difference = subtract}
        }
      }
      return difference
    }
  }