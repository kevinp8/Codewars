function countLanguages(list) {
    let languages = {}
    for (const i of list) {
      if (i.language in languages) {
        languages[i.language] += 1
      } else{languages[i.language] = 1}
    }
    return languages
  }