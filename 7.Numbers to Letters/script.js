function switcher(x){
    x = x.map(num => {
      if (num == 27) return '!'
      else if (num == 28) return '?'
      else if (num == 29) return ' '
      else return String.fromCharCode(26-Number(num)+97)
    })
    return x.join('')
  }