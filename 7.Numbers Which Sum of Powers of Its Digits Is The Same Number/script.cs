using System;
using System.Collections.Generic;

public class Sumpowdig {
    
    public static long[] EqSumPowDig(long hmax, int exp) 
    {
        var nums = new List<long>();
        for (int i=153; i<=hmax; i++){
          string num = i.ToString();
          int prod = 0;
          for (int j=0; j<num.Length; j++){
            prod += (int)Math.Pow(int.Parse(num[j].ToString()), exp);
          }
          if (prod == i) nums.Add((long)prod);
        }
        return nums.ToArray();
        
    }
}