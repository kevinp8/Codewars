function greetDevelopers(list) {
    list.forEach(i => i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?`)
    return list
  }