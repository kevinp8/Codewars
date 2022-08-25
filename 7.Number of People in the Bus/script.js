var number = function(busStops){
  let total = 0
  for (let i of busStops) {
    total += i[0]
    total -= i[1]
  }
  return total
}