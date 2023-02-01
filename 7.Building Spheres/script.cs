using System;
public class Sphere
{
  private static int radius;
  private static int mass;
  
	public Sphere(int r, int m){
    radius = r;
    mass = m;
  }
  
  public int GetRadius(){
    return radius;
  }
  public int GetMass(){
    return mass;
  }
  public double GetVolume(){
    return (double)Decimal.Round((decimal)(4*Math.PI*Math.Pow(radius, 3)/3), 5);
  }
  public double GetSurfaceArea(){
    return (double)Decimal.Round((decimal)(4 * Math.PI * Math.Pow(radius, 2)), 5);
  }
  public double GetDensity(){
    return (double)Decimal.Round((decimal)(mass/GetVolume()), 5);
  }
}