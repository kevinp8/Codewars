function riders(stations) {
  let people = 1
  let dist = 0
  for (let i=0; i<stations.length; i++) {
    dist += stations[i]
    if (dist > 100) {
      people++
      dist = stations[i]
    }
  }
  return people
}