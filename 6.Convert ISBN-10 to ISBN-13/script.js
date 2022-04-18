function isbnConverter(isbn) {
  let newi = ('978-' + isbn.slice(0, -1)).split('-').join('')
  let multiplier = 1
  let end = newi.split('').reduce((init, i) => {
    init += parseInt(i) * multiplier
    multiplier == 1 ? multiplier = 3 : multiplier = 1
    return init
  }, 0)
  let lnum = 10-(end%10) == 10 ? 0 : 10-(end%10)
  return '978-' + isbn.slice(0, -1) + (lnum)
}