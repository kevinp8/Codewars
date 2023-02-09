using System.Collections.Generic;
using System;

public class Kata
{
  public static string[] KillCount(Dictionary<string, int> counselors, int jason)
  {
    var ppl = new List<string>();
    foreach (var person in counselors){
      if (person.Value < jason) ppl.Add(person.Key);
    }
    return ppl.ToArray();
  }
}