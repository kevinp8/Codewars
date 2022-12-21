function wordToBin(str){
  let num = str.split('').map( i =>  '0' + i.charCodeAt(0).toString(2))
  return num;
}
