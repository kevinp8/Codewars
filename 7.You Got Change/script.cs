using System;

public class Kata
{
  public static int[] GiveChange(int amount)
  { 
    int[] bills = {0,0,0,0,0,0};
    if(amount >=100){
        bills[5] = (int)Math.Floor((double)amount/100);
        amount = amount%100;
    }
    if(amount >=50){
        bills[4] = (int)Math.Floor((double)amount/50);
        amount = amount%50;
    }
    if(amount >=20){
        bills[3] = (int)Math.Floor((double)amount/20);
        amount = amount%20;
    }
    if(amount >=10){
        bills[2] = (int)Math.Floor((double)amount/10);
        amount = amount%10;
    }
    if(amount >=5){
        bills[1] = (int)Math.Floor((double)amount/5);
        bills[0] = amount%5;
    } else bills[0] = amount;
    return bills;
    
  }
}