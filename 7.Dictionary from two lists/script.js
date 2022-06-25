function createDict(keys, values){
  let obj = {}
  for (let i=0; i<keys.length; i++) {
    obj[keys[i]] = values[i] == undefined ? null : values[i]
  }
  return obj
}