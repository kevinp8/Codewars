function arrayLeaders(numbers){
  return numbers.filter((i, index) => i > numbers.slice(index+1).reduce((init, num) => init+num,0));
}