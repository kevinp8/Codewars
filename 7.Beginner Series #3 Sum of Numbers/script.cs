  using System;
  public class Sum
  {
     public int GetSum(int a, int b)
     {
       int sum = 0;
       for (int i=Math.Min(a, b); i<=Math.Max(a, b); i++){
         sum += i;
       }
       return sum;
     }
  }