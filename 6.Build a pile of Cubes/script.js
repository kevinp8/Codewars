function findNb(m) {
  let sum = 0
  let cubes = 0
    for (let i=1; i<m; i++) {
      if (sum >= m) {
        break
      } else {
        sum += i**3
        cubes++
      }
    }
    return sum == m ? cubes : -1;
}