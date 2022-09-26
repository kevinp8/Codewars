function modifyMultiply (str,loc,num) {
  const words = str.split(' ')
  let arr = []
  for (let i=0; i<num; i++) {
    arr.push(words[loc])
  }
  return arr.join('-')
} 