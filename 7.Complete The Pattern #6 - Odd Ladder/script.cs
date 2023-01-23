using System;
using System.Collections.Generic;

public static class Kata
{
  public static string OddLadder(int n)
  {
    if (n <= 0) return "";
    else {
      var nums = new List<string>();
      for (int i=1; i<=n; i+=2){
        string num = "";
        for (int j=0; j<i; j++){
          num += i;
        }
        nums.Add(num);
      }
      return string.Join("\n", nums);
    }
    throw new NotImplementedException();
  }
}