function well(x){
    let goods = 0
    x.forEach(i => {
      if (i === 'good') {goods++}
    })
    if (goods > 2) {
      return 'I smell a series!'
    } else if (goods > 0) {
      return 'Publish!'
    } else {
      return 'Fail!'
    }
  }