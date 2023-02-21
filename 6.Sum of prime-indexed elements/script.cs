using System;

public class Solution
{
    public static int solve(int [] arr){  
        int sum = 0;
        for (int i=2; i<arr.Length; i++){
          bool prime = false;
          for (int j=2; j<=i/2; j++){
            if (i%j == 0) prime = true;
          }
          if(!prime) sum += arr[i];
        }
      return sum;
    }
}