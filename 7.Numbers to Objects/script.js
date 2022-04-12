function numObj(s){
    let arr = []
    let obj = {}
    for (const i of s){
      obj[i] = String.fromCharCode(i)
      arr.push(obj)
      obj = {}
    }
    return arr
  }