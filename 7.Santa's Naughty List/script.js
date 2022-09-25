function findChildren(santasList, children) {
  let arr = []
  children.forEach(i => {
    if (santasList.includes(i) && !arr.includes(i)) arr.push(i)
  })
  return arr.sort()
}