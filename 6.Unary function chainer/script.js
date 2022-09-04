function chained(functions) {
  return (a) => {
    let num = a
    functions.forEach(i => num = i(num))
    return num
  }
}