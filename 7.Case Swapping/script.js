function swap(str){
    let caseSwapped = ''
    for (const i of str) {
      if (i === i.toUpperCase()) {
        caseSwapped += i.toLowerCase()
      } else {
        caseSwapped += i.toUpperCase()
      }
    }
    return caseSwapped
  }