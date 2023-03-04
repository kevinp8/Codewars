using System;

public static class Kata
{
  public static int Solution(int[] items, int index, int defaultValue)
  {
    for (int i=0; i<items.Length; i++){
      if (i == index)return items[i];
      if ( (index<0) && (i == items.Length - (index * -1))) return items[items.Length - (index * -1)];
    }
    return defaultValue;
  }
}