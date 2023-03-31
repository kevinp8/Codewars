function splitTheBill(x) {
  x = Object.entries(x)
  let avg = x.reduce((init, i) => init + i[1] ,0)/x.length
  let bill = x.reduce((init, i) => {
    init[i[0]] = Number((i[1]-avg).toFixed(2))
    return init
  }, {})
  return bill


}