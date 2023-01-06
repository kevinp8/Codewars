function password(str) {
  let upper = false
  let lower = false
  let num = false
    if (str.length >= 8){
      for (let i=0; i<str.length; i++){
        if ((/[A-Z]/).test(str[i])){
          upper = true
          continue
        }
        if ((/[a-z]/).test(str[i])){
          lower = true
          continue
        }
        if ((/[0-9]/).test(str[i])){
          num = true
          continue
        }
      }
      return upper && lower && num
    } else return false
}