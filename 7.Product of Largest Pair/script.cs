using System;
public class Kata
{
  public static int MaxProduct(int[] array)
  { 
    Array.Sort(array);
    return array[array.Length-1] * array[array.Length-2];
  }
}