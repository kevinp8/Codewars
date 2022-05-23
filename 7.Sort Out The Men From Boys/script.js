function menFromBoys(arr){
  let arrUnique = []
  arr.forEach(i => arrUnique.includes(i) ? i : arrUnique.push(i))
  let evens = arrUnique.filter(i => i%2==0).sort((a, b) => a-b)
  let odds = arrUnique.filter(i => i%2!=0).sort((a, b) => b-a)
  return evens.concat(odds)
}