using System;

public class Kata
{
  public static int NextPal(int val)
  {
    int num = val+1;
    while(true){
      string numStr = num.ToString();
      bool palin = true;
      for(int i=0; i<numStr.Length/2; i++){
        if(numStr[i] != numStr[numStr.Length-1-i]){
          palin = false;
          break;
        }
      }
      if (palin) return num;
      num++;
    }
  }
}
