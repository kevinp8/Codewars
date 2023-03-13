using System;

public static class Kata
{  
  public static string ReverseFactorial(long num)
  {
    long prod = 1;
    for(long i=1; i<=num; i++){
      prod *= i;
      if (prod == num) return $"{i}!";
      else if (prod > num) return "None";
    }
    return "None";
  }
}