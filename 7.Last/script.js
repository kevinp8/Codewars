function last(...list){
  if (list.length == 1) {
    if (typeof list[0] === 'string' || typeof list[0] === 'object') return list[0][list[0].length-1]
    else return list[0]
  } else return list[list.length-1]
}
