public class Kata
{
  public static string AbbrevName(string name)
  {
    var words = name.Split(' ');
    return $"{words[0].ToUpper()[0]}.{words[1].ToUpper()[0]}";
  }
}