function rot13(message){
  return message.split('').map(char => {
    if ((/[A-Z]/).test(char)) { //if charcode > 122, subtract 24
      let code = char.charCodeAt(0) + 13
      while (code > 90) code -= 26
      return String.fromCharCode(code)
    }
    else if ((/[a-z]/).test(char)) {
      let code = char.charCodeAt(0) + 13
      while (code > 122) code -= 26
      return String.fromCharCode(code)
    }
    else return char
  }).join('')
}