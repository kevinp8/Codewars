using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
    public static IEnumerable<(int, int)> GeneratePairs(int m, int n) 
    {
        var nums = new List<(int, int)>();
        for (int i=m; i<=n; i++){
          for (int j=i; j<=n; j++){
            nums.Add((i, j));
          }
        }
        return nums;
    }  
}