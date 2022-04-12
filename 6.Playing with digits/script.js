function digPow(n, p){
    let startPower = p
    let sum = 0
    for (const i of String(n)) {
      sum += Number(i) ** startPower
      startPower++
    }
    return Number.isInteger(sum/n) ? sum/n : -1
  }