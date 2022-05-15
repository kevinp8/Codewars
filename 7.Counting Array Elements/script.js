function count(array){
  return array.reduce((init, item) => {
    if (item in init) {
      init[item]++
      return init
    } else {
      init[item] = 1
      return init
    }
  }, {})
}
