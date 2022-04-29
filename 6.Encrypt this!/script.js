var encryptThis = function(text) {
  let words = text.split(' ')
  let encrypt = ''
  let encrypted = []
  for (const word of words) {
    for (let i=0; i<word.length; i++) {
      if (i == 0) {
        if (word.length-1 == 0) {
          encrypt += word.charCodeAt(0)
          encrypted.push(encrypt)
          encrypt = ''
        } else{
          encrypt += word.charCodeAt(0)
        }
      } else if (i == 1) {
          if (word.length-1 == 1) {
            encrypt += word[word.length-1]
            encrypted.push(encrypt)
            encrypt = ''
          } else {
            encrypt += word[word.length-1]
          }
      } else if (i == word.length-1) {
          encrypt += word[1]
          encrypted.push(encrypt)
          encrypt = ''
      } else {
        encrypt += word[i]
      }
    }
  }
  return encrypted.join(' ')
}