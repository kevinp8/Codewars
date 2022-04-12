function remove (string) {
    let word = string.split('')
    if (word[word.length-1] == '!') {
      word.pop()
    }
    return word.join('');
  }