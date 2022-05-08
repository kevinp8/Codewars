function wordsToMarks(string){
  return string.split('').reduce((init, char) => init + char.charCodeAt(0)-96,0)
}