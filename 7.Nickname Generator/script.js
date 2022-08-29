function nicknameGenerator(name){
  if (name.length<4) return "Error: Name too short"
  else if (!(/[aeiou]/.test(name[2]))) {
    return name.slice(0, 3)
  } else if (/[aeiou]/.test(name[2])) {
    return name.slice(0, 4)
  } else return name
}