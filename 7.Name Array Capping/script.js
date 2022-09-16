function capMe(names) {
  return names.map(i => i[0].toUpperCase() + i.slice(1).toLowerCase())
}