function solve(s,g){
  if (s%g == 0) {
    for (let i=g; i<=s; i+=g) {
      for (let j=g; j<=s; j+=g) {
        if (i + j == s) return [i, j]
      }
    }
  }
  else return -1
}