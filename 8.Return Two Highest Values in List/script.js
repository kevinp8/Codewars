function twoHighest(arr) {
  let unique = []
  for (const i of arr) {
    if (!unique.includes(i)) unique.push(i)
  }
  unique.sort((a, b)=> a-b)
  if (unique.length > 1) {
    return [unique.pop(), unique.pop()]
  } else return unique

}