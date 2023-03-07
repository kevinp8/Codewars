
public class HorizontalImageOfPart2
{
  public static string Pattern(int n)
  {
    string num = "";
    string nums = "";
    for (int i=n; i>0; i--){
      num += i;
      nums += num;
      if (i != 1) nums += "\n";
    }
    return nums;
    
  }
}