function titleCase(title, minorWords) {
  if (title) {
    let lowerWords = minorWords ? minorWords.split(' ').map(i => i.toLowerCase()) : ''
    return title.split(' ').map((word, index) => {
      if (index == 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      } else if (lowerWords.includes(word.toLowerCase())) {
        return word.toLowerCase()
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }).join(' ')
  } else {
    return ''
  }
}