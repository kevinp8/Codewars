function findEvenIndex(arr)
{
  let ye = -1
  arr.forEach((num, index) => {
    let half1 = arr.slice(0, index).reduce((init, i) => init+i, 0)
    let half2 = arr.slice(index+1, arr.length).reduce((init, i) => init+i, 0)
    if (half1 == half2) ye = index
  })
  return ye
}