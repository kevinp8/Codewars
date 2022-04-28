function isIsogram(str){
  let strLow = str.toLowerCase()
  return strLow.split('').every(i => strLow.indexOf(i) == strLow.lastIndexOf(i))
}