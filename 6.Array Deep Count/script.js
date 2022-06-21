function deepCount(a){
  let arrCount = a.length
  a.forEach(i => {
    if (Array.isArray(i)) {
      arrCount += deepCount(i)
    }
  })
  return arrCount
}