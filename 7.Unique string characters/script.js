function solve(a,b){
 return a.split('').filter(i => !b.includes(i)).concat(b.split('').filter(i => !a.includes(i))).join('')
};