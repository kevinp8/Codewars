var removeVowels = function(str){
//code here
  while (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
    str   = str.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')
  }
  return str
}