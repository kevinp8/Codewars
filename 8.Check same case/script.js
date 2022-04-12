function sameCase(a, b){
    if ((/[a-zA-Z]/).test(a) && (/[a-zA-Z]/).test(b)) {
      if ((a == a.toLowerCase() && b == b.toLowerCase()) || (a == a.toUpperCase() && b == b.toUpperCase())) return 1
      else return 0
    } else return -1
  }