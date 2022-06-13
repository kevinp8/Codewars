function dbSort(a){
  let nums = a.filter(i => Number.isInteger(i)).sort((a, b)=>a-b)
  let strs = a.filter(i => typeof i == 'string').sort()
  return nums.concat(strs)
}