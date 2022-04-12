const flip=(d, a)=>{
    if (d === 'R') {
      return a.sort((i, j) => i-j)
    } else if (d ==='L'){
      return a.sort((i, j) => j-i)
    }
  }