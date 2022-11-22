function lostSheep(friday,saturday,total){
  return total - friday.reduce((init, i) => init + i, 0) - saturday.reduce((init, i) => init + i, 0)
}