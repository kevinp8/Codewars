var capitals = function (word) {
    let arr = []
   for (let i=0; i<word.length; i++) {
     if (word[i] === word[i].toUpperCase()) {
       arr.push(i)
     }
   }
    return arr
  };
  
 function capital(capitals){
  return capitals.map(i => `The capital of ${i.state || i.country} is ${i.capital}`)
}