using System;
public class Kata
{
  public static string Alan(string[] x)
  {
    string[] strs = {"Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"};
    foreach(var i in strs){
      if (Array.Find(x, p => p == i) == i) continue;
      else return "No, seriously, run. You will miss it.";
    }
    return "Smell my cheese you mother!";
  }
}