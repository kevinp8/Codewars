function compose(...funcs) {
  return (num) => {
    let res = null
    if (!funcs.length) return num
    for (let i=funcs.length-1; i>-1; i--){
      if (res === null) res = funcs[i](num)
      else res = funcs[i](res)
    }
    return  res
  }
}