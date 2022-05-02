function streetFighterSelection(fighters, position, moves){
  let x = position[0]
  let y = position[1]
  let chosen = []
  
  moves.forEach( move => {
    if (move === 'right') {
      x += 1
      if (x === fighters[0].length) x = 0
      chosen.push(fighters[y][x])
    }
    if (move === 'left') {
      x -= 1
      if (x < 0) x = fighters[0].length-1
      chosen.push(fighters[y][x])
    }
    if (move === 'up') {
      y -= 1
      if (y < 0) y=0
      chosen.push(fighters[y][x])
    }
    if (move === 'down') {
      y += 1
      if (y === fighters.length) y-=1
      chosen.push(fighters[y][x])
    }
  })
  return chosen
}