function sum(...args) {
  return args.reduce((init, num) => init + num, 0)
}