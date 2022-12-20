function matchArrays(v,r){
  let dict = {}
  let same = 0
  for (let i=0; i<v.length; i++){
    dict[v[i]] = 1
  }
  for (let i=0; i<r.length; i++){
    if (dict[r[i]]) same ++
  }
  return same
}