export function swapVowelCase(str: string): string {
  return str.split('').map(i => /[aeiou]/.test(i) ? i.toUpperCase() : /[AEIOU]/.test(i) ? i.toLowerCase() : i).join('')
};
