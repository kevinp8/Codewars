function capitalsFirst(str){
  let caps = []
  let lows = []
  str = str.split(' ').filter(i => i[0].match(/[a-z]/i))
  for(let i=0; i<str.length; i++){
    if (str[i][0] == str[i][0].toUpperCase()) caps.push(str[i])
    else lows.push(str[i])
  }
  return caps.concat(lows).join(' ')
}