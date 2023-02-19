using System.Collections.Generic;

public class Kata
{
  public static int SumNoDuplicates(int[] arr)
  {
    var nums = new Dictionary<string,bool>();
    int sum = 0;
    foreach(int i in arr){
      try{
        if (nums[i.ToString()]){
          sum-= i;
          nums[i.ToString()] = false;
        }
      }
      catch{
        nums[i.ToString()] = true;
        sum += i;
      }
    }
    return sum;
  }
}