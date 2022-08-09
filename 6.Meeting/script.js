function meeting(s) {
    let people = s.split(';')
    people = people.map(i => i.split(':')).map(i => [i[1], i[0]]).map(i => i.join(', ').toUpperCase()).sort().map(i => `(${i})`)
  return people.join('')
}