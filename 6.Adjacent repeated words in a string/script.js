function countAdjacentPairs(searchString) {
  let nice = 0
  searchString = searchString.toLowerCase().split(' ')
  for (let i=0; i<searchString.length; i++){
    if (searchString[i] === searchString[i-1] && searchString[i] !== searchString[i+1]) nice++
  }
  return nice
}