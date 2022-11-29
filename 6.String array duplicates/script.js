function dup(s) {
  return s.map(i => i.split('').filter((j, index) => j != i[index+1]).join(''))
};