function solve(s){
  let longest = 0
  let vowelChains = []
 for (let i=0; i<s.length; i++) {
   if (/[aeiouAEIOU]/.test(s[i])){
     longest++
   }
   else {
     vowelChains.push(longest)
     longest = 0
   }
 }
  return Math.max(...vowelChains)
}