function generateShape(integer){
  let block = []
  for (let i=0; i<integer; i++) {
    block.push('+'.repeat(integer))
  }
  return block.join('\n')
}