function absentVowel(x){
  const indices = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4
  }
  for(const i of Object.keys(indices)){
    let found = false
    function loop(){
        for(let j=0; j<x.length; j++){
        if(x[j] == i){
          found = true
          return
        }
      }
    }
    loop()
    if(!found) return indices[i]
  }
}