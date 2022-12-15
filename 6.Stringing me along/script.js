function createMessage(arg) {
  let words = []
  function stuff(arg){
    if (arg === undefined) return words.join(' ')
    else{
      words.push(arg)
      return stuff
    }
  }
  return stuff(arg)
}