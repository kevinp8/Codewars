using System;
using System.Collections.Generic;

public class Kata
{
  public static int[] FindMissingNumbers(int[] arr)
  {
    var nums = new List<int>();
    for (int i=1; i<arr.Length; i++){
      int prev = arr[i-1];
      while (prev+1 != arr[i]){
        prev++;
        nums.Add(prev);
      }
    }
    return nums.ToArray();
  }
}