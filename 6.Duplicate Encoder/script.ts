export function duplicateEncode(word: string): string{
  let chars: string[] = word.toLowerCase().split('')
    return chars.map(i => chars.indexOf(i) === chars.lastIndexOf(i) ? '(' : ')').join('')
}