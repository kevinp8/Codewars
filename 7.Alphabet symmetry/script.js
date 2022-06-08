function solve(arr){  
  return arr.map(word => {
    return word.toLowerCase().split('').reduce((init, char, index) => char.charCodeAt(0)-97 === index ? init + 1 : init, 0)
  })
};