function validate(password) {
  let reqs = {
    lower: false,
    upper: false,
    num: false
  }
  if (password.split('').every(i => (/[a-zA-Z0-9]/).test(i)) && password.length >= 6) {
    password.split('').forEach(j => {
      if ((/[a-z]/).test(j)) reqs.lower = true
      else if ((/[A-Z]/).test(j)) reqs.upper = true
      else if ((/[0-9]/).test(j)) reqs.num = true
    })
    return reqs.lower && reqs.upper && reqs.num
  }
  else return false
}