using System.Collections.Generic;

public class Kata
{
  public static object[] ArrayLowerCase(object[] arr)
  {
    var lowers = new List<object>();
    foreach(var i in arr){
      if (i is string) lowers.Add(i.ToString().ToLower());
      else lowers.Add(i);
    }
    return lowers.ToArray();
  }
}