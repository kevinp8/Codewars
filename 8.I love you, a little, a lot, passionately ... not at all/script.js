function howMuchILoveYou(nbPetals) {
    let petals = nbPetals
    while (petals > 6) {
      petals -= 6
    }
    if (petals == 1) {
      return 'I love you'
    }
  if (petals == 2) {
      return 'a little'
    }
  if (petals == 3) {
      return 'a lot'
    }
  if (petals == 4) {
      return 'passionately'
    }
  if (petals == 5) {
      return 'madly'
    }
  if (petals == 6) {
      return 'not at all'
    }
}