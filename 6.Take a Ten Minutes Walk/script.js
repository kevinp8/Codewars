function isValidWalk(walk) {
    x=0
    y=0
    for (const i of walk){
      if (i == 'n') {y++}
      if (i == 's') {y--}
      if (i == 'w') {x++}
      if (i == 'e') {x--}
    }
    return x==0 && y== 0 && walk.length == 10
  }