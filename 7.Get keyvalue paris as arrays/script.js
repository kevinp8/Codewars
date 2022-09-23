function keysAndValues(data){
  let ye = []
  let eh = []
  for (let keys in data) {
    ye.push(keys)
    eh.push(data[keys])
  }
  return [ye, eh]
}