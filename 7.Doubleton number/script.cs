using System.Collections.Generic;

public static class Kata
{
    public static int Doubleton(int num)
    {
        
        int numb = num+1;
        while(true){
          var nums = new List<char>();
          foreach(char i in numb.ToString()){
            if (nums.Contains(i)) continue;
            else nums.Add(i);
          }
          if (nums.Count == 2) return numb;
          else numb++;
        }
    }
}