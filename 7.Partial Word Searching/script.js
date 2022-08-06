function wordSearch(query, seq){
  let arr = seq.filter(i => i.toLowerCase().includes(query.toLowerCase()))
  return arr.length> 0 ? arr : ['Empty']
}