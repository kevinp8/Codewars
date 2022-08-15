function scrollingText(text){
  let arr = []
  for (let i=0; i<text.length; i++) {
    arr.push(
      (text.slice(i) + text.slice(0, i)).toUpperCase()
    )
  }
  return arr
}