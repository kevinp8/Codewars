function longest(str) {
  let longestStr = ''
  let max = ''
  for (let i=0; i<str.length; i++) {
    if (i == str.length-1) longestStr += str[i]
    else if (str[i].charCodeAt(0) <= str[i+1].charCodeAt(0)) {
      longestStr += str[i]
    } else {
      longestStr += str[i]
      if (longestStr.length > max.length) max = longestStr
      longestStr = ''
    }
  }
  if (longestStr.length > max.length) max = longestStr
  return max
}