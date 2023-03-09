using System;

public static class Kata
{
  public static bool IsAllPossibilities(int[] arr)
  {
    if (arr.Length == 0) return false;
    for (int i=0; i<=arr.Length-1; i++){
      if (!Array.Exists(arr, element => element == i)) return false;
    }
    return true;
  }
}