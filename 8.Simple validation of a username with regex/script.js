function validateUsr(username) {
  res =  username.split('').every(i => (/[a-z0-9_]/).test(i))
  return (username.length>=4 && username.length<=16) ? res : false
}