function warnTheSheep(queue) {
  queue.reverse()
  if (queue[0] === 'wolf') return 'Pls go away and stop eating my sheep'
  else {
    for (let i=0; i<queue.length; i++) {
      if (queue[i+1] === 'wolf') return `Oi! Sheep number ${i+1}! You are about to be eaten by a wolf!`
    }
  }
  
}
