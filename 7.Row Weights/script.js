function rowWeights(array){
  let weights = [0, 0]
  for (let i=0; i<array.length; i++) {
    if (i%2 === 0) weights[0] += array[i]
    else weights[1] += array[i]
  }
  return weights
}