class Dictionary {
  constructor() {
    // your code
  }
  
  newEntry(key, value) {
    this[key] = value
  }
  
  look(key) {
    return this[key] || `Can't find entry for ${key}`
  }
}