using System;

public class Kata
{
  public static int? Closest(int[] arr)
  {
    Array.Sort(arr);
    int closest = int.MaxValue;
    foreach (int i in arr){
      if (i == 0) return 0;
      else {
        if (i == (closest * -1)) return null;
        if (Math.Abs(i) <= Math.Abs(closest)) closest = i;
        else break;
      }
    }
    return closest;
  
  }
}