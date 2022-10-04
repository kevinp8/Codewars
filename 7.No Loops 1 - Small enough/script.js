function smallEnough(a, limit){
  return a.filter(i => i <= limit).length === a.length
}