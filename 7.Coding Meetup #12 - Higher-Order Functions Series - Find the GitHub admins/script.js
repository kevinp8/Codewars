function findAdmin(list, lang) {
    return list.filter(i => i.githubAdmin == 'yes' && i.language == lang)
  }