function mirror(data) {
  let e = [...data]
  e.sort((a, b) => a-b)
  let middle = [e.pop()]
  if (data.length < 2) return data
  return [...e, ...middle, ...e.reverse()]
  
}