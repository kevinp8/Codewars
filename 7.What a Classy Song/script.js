// code here
class Song {
  constructor(title, artist){
    this.title = title
    this.artist = artist
    this.listeners = []
  }
  howMany(arr){
    let newListen = 0
    arr.forEach(person => {
      if (!this.listeners.includes(person.toLowerCase())) {
        newListen++
        this.listeners.push(person.toLowerCase())
      }
    })
    return newListen
  }
}