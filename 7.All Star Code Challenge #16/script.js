function noRepeat(str) {  
  return str.split('').find(i => str.indexOf(i) === str.lastIndexOf(i))

}