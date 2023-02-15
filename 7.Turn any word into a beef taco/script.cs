using System.Collections.Generic; 

public class Kata
 {
    public static string[] Tacofy(string word)
    {
        var taco = new List<string>();
        taco.Add("shell");
        foreach(char i in word.ToLower()){
          if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') taco.Add("beef");
          else if (i == 't') taco.Add("tomato");
          else if (i == 'l') taco.Add("lettuce");
          else if (i == 'c') taco.Add("cheese");
          else if (i == 'g') taco.Add("guacamole");
          else if (i == 's') taco.Add("salsa");
        }
        taco.Add("shell");
        return taco.ToArray();
    }
 }