function insideOut(x){
  return x.split(' ').map(i => {
    let str = i.length%2 != 0 ? i[Math.floor(i.length/2)] : ''
    for (let j=0; j<Math.floor(i.length/2); j++) str = i[j] + str + i[i.length-1-j]
    return str
  }).join(' ')
}