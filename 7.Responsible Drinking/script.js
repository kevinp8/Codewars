function hydrate(s) {
  let waters = s.split('').filter(i=> (/[1-9]/).test(i)).reduce((init, i) => init + Number(i),0)
  return waters > 1 ? waters + ' glasses of water' : waters + ' glass of water'
}