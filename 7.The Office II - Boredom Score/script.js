function boredom(staff){
  const menu = {
    accounts : 1,
    finance : 2,
    canteen : 10,
    regulation : 3,
    trading : 6,
    change : 6,
    IS : 8,
    retail : 5,
    cleaning : 4,
    'pissing about' : 25
  }
  let points = 0
  for (let key in staff) {
    points += menu[staff[key]]
  }
  if (points <= 80) return 'kill me now'
  else if (points < 100) return 'i can handle this'
  else return 'party time!!'
}