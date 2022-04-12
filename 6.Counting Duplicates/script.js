function duplicateCount(text){
    let counter = {}
    let duplicates = 0
    for (const i of text.toLowerCase()) {
      if (i in counter) {
        counter[i]++
      } else {
        counter[i] = 1
      }
    }
    for (const letter in counter) {
      if (counter[letter] > 1) {
        duplicates++
      }
    }
    return duplicates
  }