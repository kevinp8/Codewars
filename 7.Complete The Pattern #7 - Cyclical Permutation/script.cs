using System.Collections.Generic;

public class CyclicalPermutation
{
  public static string Pattern(int n)
  {
    var rows = new List<string>();
    var nums = new List<string>();
    for (int i=1; i<=n; i++){
      nums.Add(i.ToString());
    }
    rows.Add(string.Join("", nums));
    for (int j=1; j<n; j++){
        nums.Add(nums[0]);
        nums.RemoveAt(0);
        rows.Add(string.Join("", nums));
    }
    return string.Join("\n", rows);
  }
}