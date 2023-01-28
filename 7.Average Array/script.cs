using System;
using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static double[] AvgArray(double[][] arr)
  {

    var avgs = new List<double>();
    for (int i=0; i<arr[0].Length; i++){
      avgs.Add((double)0);
    }

    for (int i=0; i<arr.Length; i++){
      for (int j=0; j<arr[i].Length; j++){
        avgs[j] += arr[i][j];
      }
    }
    return avgs.Select(num => num/arr.Length).ToArray();

  }
}