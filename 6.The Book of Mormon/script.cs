public class Kata
{
  public static long Mormons(long startingNumber, long reach, long target)
  {
    int missions = 0;
    long total = startingNumber;
    while (total < target){
      total += (total*reach);
      missions++;
    }
    return missions;
  }
}