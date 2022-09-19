export class Kata {
  static squareDigits(num: number): number {
    return parseInt(num.toString().split('').map(i => Number(i)**2).join(''))
  }
}