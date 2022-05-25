function toTime(seconds) {
  let hours = 0
  let minutes = 0
  if (seconds < 3600) {
    minutes = Math.floor(seconds/60)
  } else {
    hours = seconds/60/60
    minutes = Math.floor((hours - (Math.floor(hours))) * 60)
    hours = Math.floor(hours)
  }
  return `${hours} hour(s) and ${minutes} minute(s)`

}