function isPangram(string){
  return Object.keys(
    string.split('').reduce((initial, i) => {
      if ((/[a-zA-Z]/).test(i)) initial[i.toLowerCase()] = 1
      return initial
    }, {})
  ).length == 26
}