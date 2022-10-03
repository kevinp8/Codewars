function determineTime (durations) {
  let time = [0, 0, 0]
  durations.forEach(i => {
    let duration = i.split(':')
    time[0] += Number(duration[0])
    time[1] += Number(duration[1])
    time[2] += Number(duration[2])
  })
  if (time[0] <= 24) {
    if (time[0] === 24 && !time[1] && !time[2]) return true
    else if (time[0] < 24) return true
    else return false
  }
  else return false
}