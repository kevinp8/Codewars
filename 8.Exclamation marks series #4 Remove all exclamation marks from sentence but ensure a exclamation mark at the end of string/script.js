function remove (string) {
    let word = string.split('').filter(i => i!= '!').join('')
    return word+'!';  
  }