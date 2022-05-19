function reverse(str){
  return str.trim() === '' ? '' : str.split(' ').map((word, index) => index%2!=0 ? word.split('').reverse().join('') : word).join(' ')
}