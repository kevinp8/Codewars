function autocomplete(input, dictionary){
  let cleanup = input.match(/[a-z]/gi).join('').toLowerCase()
  return dictionary.filter(element => element.toLowerCase().startsWith(cleanup)).slice(0, 5)
}