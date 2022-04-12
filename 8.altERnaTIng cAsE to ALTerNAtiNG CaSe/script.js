String.prototype.toAlternatingCase = function () {
    let alt = ''
    this.split('').forEach(i => {
      if (i == i.toLowerCase()) {
        alt += i.toUpperCase()
      } else {
        alt += i.toLowerCase()
      }
    })
    return alt
  }