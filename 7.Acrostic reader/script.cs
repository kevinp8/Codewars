using System.Linq;

public static class Kata
{
  public static string ReadOut(string[] acrostic)
  {
    return acrostic.Aggregate("", (acc, i) => acc+i[0]);
  }
}