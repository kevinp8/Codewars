public static class StringExtensions
{
  public static bool IsUpperCase(this string text)
  {
    return text == text.ToUpper();
  }
}