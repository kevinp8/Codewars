function strCount(str, letter){  
  let count = 0
  str.split('').forEach(i => i==letter ? count++ : count+= 0)
  return count
}