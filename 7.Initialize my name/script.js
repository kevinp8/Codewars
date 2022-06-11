function initializeNames(name){
  let names = name.split(' ')
  if (names.length < 3) return name
  else {
    names = names.map((i, index) => index == 0 || index == names.length-1 ? i : i[0]+'.')
    return names.join(' ')
  }
}