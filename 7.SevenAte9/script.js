function sevenAte9(str){
  return str.split('').filter((i, index) =>  !(i=='9' && str[index+1] == '7' && str[index-1] == '7') ).join('')
}