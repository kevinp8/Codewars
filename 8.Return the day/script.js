function whatday(num) { 
  const week = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  }
  return num<8 && num > 0 ? week[num] : 'Wrong, please enter a number between 1 and 7'
}