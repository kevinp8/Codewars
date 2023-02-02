function mygcd(a, b){
  let smaller = a < b ? a : b;
    while(a%smaller != 0 || b%smaller != 0){
      if (smaller == 1) break;
      smaller--;
    }
    return smaller;
}