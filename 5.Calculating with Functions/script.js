function zero(a) {
  if (a) return a(0)
  else return 0
}
function one(a) {
  if (a) return a(1)
  else return 1
}
function two(a) {
  if (a) return a(2)
  else return 2
}
function three(a) {
  if (a) return a(3)
  else return 3
}
function four(a) {
  if (a) return a(4)
  else return 4
}
function five(a) {
  if (a) return a(5)
  else return 5
}
function six(a) {
  if (a) return a(6)
  else return 6
}
function seven(a) {
  if (a) return a(7)
  else return 7
}
function eight(a) {
  if (a) return a(8)
  else return 8
}
function nine(a) {
  if (a) return a(9)
  else return 9
}

function plus(num) {
  function add(b) {
    return b+num
  }
  return add
}
function minus(num) {
  function subtract(b) {
    return b-num
  }
  return subtract
}
function times(num) {
  function mult(b) {
    return b*num
  }
  return mult
}
function dividedBy(num) {
  function div(b) {
    return Math.floor(b/num)
  }
  return div
}