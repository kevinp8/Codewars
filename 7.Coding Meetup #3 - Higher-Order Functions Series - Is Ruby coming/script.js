function isRubyComing(list) {
    for (const i of list) {
      if (i.language == 'Ruby') {
        return true
      }
    }
    return false
  }