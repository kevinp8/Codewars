function likes(names) {
    if (names.length >=4) {
      return names.slice(0, 2).join(', ') +  ` and ${names.length-2} others like this`
    } else if (names.length ==1) {
      return `${names[0]} likes this`
    } else if (names.length >=2) {
      return names.slice(0, names.length-1).join(', ') +  ` and ${names[names.length-1]} like this`
    } else {
      return 'no one likes this'
    }
  }