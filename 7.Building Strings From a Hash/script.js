function solution(pairs){
  let values = []
  for (let key in pairs) {
    values.push(`${key} = ${pairs[key]}`)
  }
  return values.join(',')
}