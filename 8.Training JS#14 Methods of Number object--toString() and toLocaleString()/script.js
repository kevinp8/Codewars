function colorOf(r,g,b){
  const red = r.toString(16).length === 2 ? r.toString(16) : '0' + r.toString(16)
  const green = g.toString(16).length === 2 ? g.toString(16) : '0' + g.toString(16)
  const blue = b.toString(16).length === 2 ? b.toString(16) : '0' + b.toString(16)
  return '#' + red + green + blue
  
}
