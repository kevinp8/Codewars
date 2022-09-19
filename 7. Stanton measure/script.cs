public class Kata
{
  /// <summary>
  /// Returns the Stanton Measure of the array</summary>
  /// <param name="arr">Int32[] to be evaluated.</param>
  public static int StantonMeasure(int[] arr)
  {
    int count = 0;
    int stanton = 0;
    
    for (int i=0; i< arr.Length; i++) {
      if (arr[i] == 1) count++;
    }
    for (int i=0; i< arr.Length; i++) {
      if (arr[i] == count) stanton++;
    }
    return stanton;
  }
}