function smallEnough(a, limit){
    return a.reduce((isUnder, num) => num <= limit ? isUnder : isUnder=false, true)
  }