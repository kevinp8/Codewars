function bandNameGenerator(str) {
  let name = str.toLowerCase()
  if (name[0] === name[name.length-1]) return str[0].toUpperCase() + str.slice(1) + str.slice(1)
  else return 'The ' + str[0].toUpperCase() + str.slice(1)
}