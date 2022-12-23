function initials(n){
  const arr = n.split(' ')
  return arr.reduce((init, i, index) => index === arr.length-1 ? init + i[0].toUpperCase() + i.slice(1) : init + i[0].toUpperCase() + '.' ,'')
}