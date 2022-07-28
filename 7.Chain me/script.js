function chain(input, fs) {
  let value = input
  fs.forEach(func => value = func(value))
  return value
}