using System.Collections.Generic;
using System;

public class EvenLadder
{
  public static string Pattern(int n)
  {
    if (n <=1) return "";
    else {
      var lines = new List<string>();
      for (int i=2; i<=n; i+=2){
        string nums = "";
        for (int j=0; j<i; j++){
          nums += i.ToString();
        }
        lines.Add(nums);
      }
      return String.Join("\n", lines);
    }
  }
}