using System;

public static class Kata
{
  public static string Nerdify(string str)
  {
    string newStr = "";
    foreach (char i in str){
      if (i == 'a' || i == 'A') newStr += "4";
      else if (i == 'e' || i == 'E') newStr += "3";
      else if (i == 'l') newStr += "1";
      else newStr += i;
    }
    return newStr;
  }
}