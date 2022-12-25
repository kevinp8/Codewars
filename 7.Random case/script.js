function randomCase(x) {
  return x.split('').reduce((init, i) => {
    let rand = Math.round(Math.random())
    return rand ? init + i.toUpperCase() : init + i.toLowerCase()
  } ,'')
}