function decrypt(text2, n)
  {
    if (n <= 0 || text2 === null) return text2;
    
    let decrypted = "";
    const goBack = Math.floor(text2.length/2);
    
    for (let i=goBack; i<text2.length; i++){
      if(text2.length%2 != 0){
        if (text2.length-1 == i) {
          decrypted += text2[i];
        } else decrypted += text2[i] + text2[i-goBack];
      } else decrypted += text2[i] + text2[i-goBack];
    }
    
    if (n == 1)  return decrypted;
    else return decrypt(decrypted, n-1);
  }


function encrypt(text, n)
  { 
    if (n <= 0 || text === null) return text;
    let half1 = "";
    let half2 = "";
    for (let i=0; i<text.length; i++){
      if (i%2 == 0) half2 += text[i];
      else half1 += text[i];
    }
    if (n == 1)  return half1+half2;
    else return encrypt(half1+half2, n-1);
  }
