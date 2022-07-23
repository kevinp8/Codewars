function stockList(b, c){
  let stock = {}
  let format = []
  let zero = true
  c.forEach(i => {
    if (!(i in stock)) stock[i] = 0
    b.forEach((j, index) => {
      if (j[0] == i) {
        let e = j.split(' ')
        stock[i] += Number(e[1])
      }
    })
  })
  for (let key in stock) {
    format.push(`(${key} : ${stock[key]})`)
    if (stock[key] != 0) zero = false
  }
  if (zero) return ''
  else return format.join(' - ')
}