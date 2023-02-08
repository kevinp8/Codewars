using System.Linq;
using System;

class Solution
{
  public static string MeanVsMedian(int[] numbers)
  {
    double median = numbers[numbers.Length/2];
    double mean = numbers.Aggregate(0, (init, x) => init + x)/(double)numbers.Length;
    
    if (mean > median) return "mean";
    else if (median > mean) return "median";
    else return "same";
  }
}