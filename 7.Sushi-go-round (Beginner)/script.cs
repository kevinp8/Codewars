public class Kata
{
  public static int TotalBill(string str)
  {
    int price = 0;
    int counter = 0;
    foreach (var i in str){
      if (i == 'r') {
        price += 2;
        counter++;
        if (counter%5 == 0) price -= 2;
        
      }
    }
    return price;
  }
}