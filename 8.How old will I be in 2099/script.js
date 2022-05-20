function  calculateAge(a, b) {
  let age = a-b
  if (age == 1) return `You will be born in 1 year.`
  else if (age == -1) return `You are 1 year old.`
  else if (a-b<0) return `You are ${b-a} years old.`
  else if (a-b>0) return `You will be born in ${a-b} years.`
  else return 'You were born this very year!'
}

