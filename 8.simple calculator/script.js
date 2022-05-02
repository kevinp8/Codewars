function calculator(a,b,sign){
  if (isNaN(a) || isNaN(b)) return 'unknown value'
  else if (sign == '+') return a+b
  else if (sign == '-') return a-b
  else if (sign == '*') return a*b
  else if (sign == '/') return a/b
  else return 'unknown value'
}