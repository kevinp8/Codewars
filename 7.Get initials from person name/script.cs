using System.Linq;

namespace Solution
{
  public static class Program
  {
    public static string toInitials(string name)
    {
      string[] names = name.Split(" ");
      return string.Join(". ", names.Select(i => i[0]).ToArray()) + ".";
    }
  }
}