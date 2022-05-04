function disemvowel(str) {
  return str.split('').filter(char => char !== 'a' &&char !== 'e' &&char !== 'i' &&char !== 'o' &&char !== 'u'&& char !== 'A' &&char !== 'E' &&char !== 'I' &&char !== 'O' &&char !== 'U').join('');
}