function looseChange(cents){
  let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  if (cents <= 0) return change
  else {
    while (cents >= 25) {
      cents -= 25
      change['Quarters']++
    }
    while (cents >= 10) {
      cents -= 10
      change['Dimes']++
    }
    while (cents >= 5) {
      cents -= 5
      change['Nickels']++
    }
    while (cents >= 1) {
      cents -= 1
      change['Pennies']++
    }
    return change
  }
}