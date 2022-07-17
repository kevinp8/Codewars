function dirReduc(arr){
  let dir = []
  let prev
  for (let i=0; i<arr.length; i++) {
    if (i === 0) {
      dir.push(arr[i].toUpperCase())
      prev = dir[dir.length-1]
    } else {
      if (prev == 'NORTH' && arr[i].toUpperCase() == 'SOUTH') {
        dir.pop()
        prev = dir[dir.length-1]
      } else if (prev == 'SOUTH' && arr[i].toUpperCase() == 'NORTH') {
        dir.pop()
        prev = dir[dir.length-1]
      } else if (prev == 'EAST' && arr[i].toUpperCase() == 'WEST') {
        dir.pop()
        prev = dir[dir.length-1]
      } else if (prev == 'WEST' && arr[i].toUpperCase() == 'EAST') {
        dir.pop()
        prev = dir[dir.length-1]
      } else {
        dir.push(arr[i].toUpperCase())
         prev = dir[dir.length-1]
      }
    }
  }
  return dir
}