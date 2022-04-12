function pattern(n){
    let output="";
     for (let i=1; i<=n;i++) {
       output+= '1'
       for (let j=1; j<i;j++) {
         output += '*'
       }
       if (i== n) {
         output+= i
       } else if (i > 1) {
         output+= i +'\n'
       } else {
         output+= '\n'
       }
     }
    return output;
   }