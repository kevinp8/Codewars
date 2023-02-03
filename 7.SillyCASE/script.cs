using System;

public static class Kata
{
  public static string SillyCase(string str)
  {
    string first = str.Substring(0, (int)Math.Ceiling((str.Length/(double)2))).ToLower();
    string second = str.Substring((int)Math.Ceiling((str.Length/(double)2))).ToUpper();
    return first+second;
  }
}