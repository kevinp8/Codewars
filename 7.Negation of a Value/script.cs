public class Kata
{
  public static bool NegationValue(string str, bool value)
  {
    if (value) return str.Length % 2 == 0 ? true : false;
    else return str.Length % 2 == 0 ? false : true;
  }
}