public class Kata
{
  public static int? FoldTo(double distance)
  {
    if (distance < 0) return null;
    else
    {
      int folds = 0;
      double thick = 0.0001;
      while(thick < distance)
      {
          thick *=2;
          folds++;
      }
      return folds;
    }
  }
}