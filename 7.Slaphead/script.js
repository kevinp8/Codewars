function bald(x){
  const hairs = x.match(/[/]/g)?.length
  if (!hairs) return ['-'.repeat(x.length), 'Clean!']
  else if (hairs === 1) return ['-'.repeat(x.length), 'Unicorn!']
  else if (hairs === 2) return ['-'.repeat(x.length), 'Homer!']
  else if (hairs > 2 && hairs < 6) return ['-'.repeat(x.length), 'Careless!']
  else return ['-'.repeat(x.length), 'Hobo!']
}