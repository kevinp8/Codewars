using System;

public static class Kata 
{
    public static int CountSalutes(string hallway)
    {
        int rights = 0;
        int salutes = 0;
        foreach (char i in hallway){
          if (i == '>') rights++;
          else if (i == '<') salutes += 1*rights + rights;
        }
        return salutes;
    }
}