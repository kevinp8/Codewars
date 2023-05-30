function spacey(array){
  let prev = ''
  return array.map(i => {
    prev = prev+i
    return prev
  })
}