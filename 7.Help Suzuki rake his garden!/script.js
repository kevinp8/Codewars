function rakeGarden(garden) {
  return garden.split(' ').map(i => i!=='rock' && i!=='gravel' ? 'gravel' : i).join(' ')
}