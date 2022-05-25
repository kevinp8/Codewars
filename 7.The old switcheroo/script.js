function vowel2index(str) {
   return str.split('').map((char, index) => (/[aeiouAEIOU]/).test(char) ? index+1 : char).join('')
}
