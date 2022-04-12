function fakeBin(x){
    return x.split('').map(num => {
      if (parseInt(num) < 5) {
        return '0'
      } else {return '1'}
    }).join('')
  }