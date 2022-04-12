function diamond(n){
    if (n <= 0 || n%2==0) {return null}
    else{
    
      let stars = 1
      let spaces = Math.floor(n/2)
      let diam = ''
      while (stars < n) {
        for (let i=0; i<spaces; i++) {
          diam += ' '
        }
        spaces -= 1
        for (let i=0; i<stars; i++) {
          diam += '*'
        }
        stars += 2
        diam += '\n'
      }
      for (let i=0; i<n; i++) {
        diam += '*'
      }
      diam += '\n'
      while (stars > 1) {
        spaces +=1
        stars -=2
        for (let i=0; i<spaces; i++) {
          diam += ' '
        }
        for (let i=0; i<stars; i++) {
          diam += '*'
        }
        diam += '\n'
      }
      return diam;
    }
  }