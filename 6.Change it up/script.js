function changer(str) { 
    let word = ''
    str.split('').forEach(char => {
      if (isNaN(char)) {
        if (char == 'z' || char == 'Z') word+='A'
        else {
          let newChar = String.fromCharCode(char.charCodeAt(0)+1)
          if (newChar == 'a' || newChar == 'A' || newChar == 'e' || newChar == 'E' || newChar == 'i' || newChar == 'I' || newChar == 'o' || newChar == 'O' || newChar == 'u' || newChar == 'U') {
            word += newChar.toUpperCase()
          } else word += newChar.toLowerCase()
        }
      }
      else word+=char
    })
    return word    
  }