function moveVowel(input) {
  let no = ''
  let vowels = ''
  input.split('').forEach(i => (/[aeiou]/).test(i) ? vowels += i : no += i)
  return no+vowels
}