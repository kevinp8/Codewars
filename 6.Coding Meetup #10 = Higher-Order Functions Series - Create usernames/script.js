function addUsername(list) {
  let date = new Date()
  return list.map(i => ({...i, username: `${i.firstName.toLowerCase()}${i.lastName[0].toLowerCase()}${date.getFullYear()-i.age}`}))
}
