function compare(s1, s2) {
  var first
  var second
  try {
    if (s1.match(/[a-z]/gi).length == s1.length) {
      first = s1.toUpperCase().split('').reduce((init, char) => init + char.charCodeAt(0), 0)
    } else first = 0
  } catch {first = 0}
  
  try {
    if (s2.match(/[a-z]/gi).length == s2.length) {
      second = s2.toUpperCase().split('').reduce((init, char) => init + char.charCodeAt(0), 0)
    } else second = 0
  } catch {second = 0}
  
  return first == second
}