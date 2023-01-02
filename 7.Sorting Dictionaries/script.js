function sortDict(dict) {
  return Object.entries(dict).sort((a, b) => b[1]-a[1]).map(i => isNaN(i[0]) ? i : [Number(i[0]), i[1]])
}