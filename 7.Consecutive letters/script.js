function solve(s){
    let consecutive = true
    let letter
    s.split('').sort().forEach((i, index) => {
      if (index == 0) letter = i.charCodeAt(0)
      else {
        if (i.charCodeAt(0) == letter+1) letter++
        else consecutive = false
      }
    })
  return consecutive
}