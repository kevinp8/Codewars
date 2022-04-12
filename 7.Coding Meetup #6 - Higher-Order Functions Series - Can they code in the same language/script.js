function isSameLanguage(list) {
    let lastLang = ''
    for (const i of list) {
      if (lastLang == '') {
        lastLang = i.language
      } else if (lastLang != i.language) {
        return false
      }
    }
    return true
  }