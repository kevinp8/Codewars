function snail(column, day, night) {
  let position = 0
  let days = 0
  while (position < column){
    position += day
    days++
    if (position >= column) break
    position -= night
  }
  return days
}