var paintLetterboxes = function(start, end) {
  let counts = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }
  for (let i = start; i<=end; i++) {
    i.toString().split('').forEach(digit => {
      counts[digit]++
    })
  }
  return Object.keys(counts).map(num => counts[num])
}
