function timeConvert(num) { 
  if (num <=0) return '00:00'
  let hour = Math.floor(num/60)
  let minutes = num%60
  let timeStr = ''
  if (hour < 10) timeStr += `0${hour}:`
  else timeStr += `${hour}:`
  if (minutes < 10) timeStr += `0${minutes}`
  else timeStr += `${minutes}`
  return timeStr
}