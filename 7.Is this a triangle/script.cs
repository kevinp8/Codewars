public class Triangle
{
    public static bool IsTriangle(int a, int b, int c)
    {
        bool one = a+b > c;
        bool two = a+c > b;
        bool three = c+b > a;
        return one & two & three; 
    }
}