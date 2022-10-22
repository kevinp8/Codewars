function repeats(arr){
  return arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)).reduce((init, i) => init+i, 0)
};