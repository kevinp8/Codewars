const ultimateReverse = s => {
 let words = [...s].join('').split('').reverse()
  let firstIndex = 0
  let arr = []
  for (let i=0; i<s.length; i++){
    arr.push(words.splice(0, s[i].length).join(''))
  }
  return arr
};