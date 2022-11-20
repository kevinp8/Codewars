function getNiceNames(people){
  return people.filter(i => i.wasNice).map(i => i.name)
}

function getNaughtyNames(people){
  return people.filter(i => !i.wasNice).map(i => i.name)
}