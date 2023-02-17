function solve(st) {
   let chars = {}
   for (let i=0; i<st.length; i++){
     if (chars[st[i]]) chars[st[i]].push(i)
     else chars[st[i]] = [i]
   }
    let gap = -1
    let ans = st[0]
    for(let key in chars){
      let num = Math.max(...chars[key]) - Math.min(...chars[key])
      if (num >= gap){
        if (num == gap && key > ans) continue
        ans = key
        gap = num
      }
    }
    return ans
}