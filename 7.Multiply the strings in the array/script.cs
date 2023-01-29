using System;

public static class Kata
{
  public static string ArrMultiply(string[] arr)
  {
    int prod = 1;
    for (int i=0; i<arr.Length; i++){
      prod *= int.Parse(arr[i]);
    }
    return prod.ToString();
  }
}