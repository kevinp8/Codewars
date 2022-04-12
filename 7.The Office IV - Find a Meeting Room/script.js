function meeting(x){
    if (x.includes('O')==false) {
      return 'None available!'
    } else {return x.findIndex(i => i=='O')}
  }