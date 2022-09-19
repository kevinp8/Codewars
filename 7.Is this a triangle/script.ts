export function isTriangle(a: number, b: number, c: number): boolean {
  return a+b>c && c+b>a && a+c>b;
}
