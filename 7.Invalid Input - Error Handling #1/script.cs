using System;
using System.Linq;

public class Kata
{
  public static Counter GetCount(object word)
  {
    int vowels = 0;
    int consonants = 0;
    if (word.GetType() == typeof(string)) {
      foreach(char i in word.ToString().ToLower()){
      if (Char.IsLetter(i)){
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') vowels++;
        else consonants++;
      } 
     }
    }
    
    return new Counter(vowels, consonants);
            
  }
}

