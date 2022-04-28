function reverseLetter(str) {
    return str.split('').filter(i => (/[a-zA-Z]/).test(i)).reverse().join('')
    
  }