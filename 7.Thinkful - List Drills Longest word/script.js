function longest(words) {
    return words.map(i => {return i.length}).sort((a, b) => a-b).pop()
  }