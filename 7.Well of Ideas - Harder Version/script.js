function well(x){
    let goods = 0
    for (const i of x) {
      for (const j of i) {
        if (typeof j==='string'){if (j.toLowerCase() == 'good') {
          goods++
        }}
      }
    }
    if (goods > 2) {
      return 'I smell a series!'
    } else if (goods > 0) {
      return 'Publish!'
    }
    else {
      return 'Fail!'
    }
  }