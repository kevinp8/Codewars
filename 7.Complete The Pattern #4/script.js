function pattern(n){
 var output=[];
  let line = ''
   for (let i=1; i<=n; i++) {
     for (let j=i; j<=n; j++) {
       line += j
     }
     output.push(line)
     line =''
   }
 return output.join('\n');
}