function getFirstPython(list) {
    for (const i of list) {
      if (i.language == 'Python') {
        return `${i.firstName}, ${i.country}`
      }
    }
    return 'There will be no Python developers'
  }